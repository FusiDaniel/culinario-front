import type { AxiosResponse } from 'axios';
import type { NextRequest } from 'next/server';
import { tryCatch } from '@repo/utils/src/tryCatch';
import axios, { isAxiosError } from 'axios';

type GetAccessTokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
};

const INVALID_CREDENTIALS = 'Invalid credentials';

const host = process.env.API_GATEWAY_URL;
const clientId = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI || '';
const jSessionIdEndpoint = `${host}/login`;
const codeEndpoint = `${host}/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}`;
const accessTokenEnpoint = `${host}/oauth2/token`;

const axiosClient = axios.create({
  maxRedirects: 0,
  validateStatus: status => status >= 200 && status < 400,
  withCredentials: true,
});

export const POST = async (request: NextRequest) => {
  const { password, username } = await request.json();

  // Get JSESSIONID
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  const getJSessionId = axiosClient.post(jSessionIdEndpoint, formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

  const selectJSessionId = (response: AxiosResponse) => {
    if (`${response.headers.location}`.split('?')[1] === 'error')
      throw new Error(INVALID_CREDENTIALS);
    return response.headers['set-cookie']?.[0].split(';')[0].split('=')[1];
  };

  const { data: jSessionId, error: jSessionIdError } = await tryCatch(getJSessionId, selectJSessionId);

  if (jSessionIdError) {
    const error = isAxiosError(jSessionIdError) ? jSessionIdError.response?.data : jSessionIdError.message;
    const status = isAxiosError(jSessionIdError) ? jSessionIdError.response?.status : 400;
    return new Response(
      JSON.stringify({ error }),
      {
        headers: { 'Content-Type': 'application/json' },
        status,
      },
    );
  }

  // Get code
  const getCode = axiosClient.get(codeEndpoint, { headers: { Cookie: `JSESSIONID=${jSessionId}` } });

  const selectCode = (response: AxiosResponse) => {
    const responseLocationURL = `${response.headers.location}`;
    const index = responseLocationURL.indexOf('code=');
    if (index === -1)
      throw new Error(INVALID_CREDENTIALS);
    return responseLocationURL.substring(index + 5);
  };

  const { data: code, error: codeError } = await tryCatch(getCode, selectCode);

  if (codeError) {
    const error = isAxiosError(codeError) ? codeError.response?.data : codeError.message;
    const status = isAxiosError(codeError) ? codeError.response?.status : 400;
    return new Response(
      JSON.stringify({ error }),
      {
        headers: { 'Content-Type': 'application/json' },
        status,
      },
    );
  }

  // Get access token
  const getAccessTokenRequestBody = new URLSearchParams();
  getAccessTokenRequestBody.append('grant_type', 'authorization_code');
  getAccessTokenRequestBody.append('code', code);
  getAccessTokenRequestBody.append('redirect_uri', redirectURI);

  const getAccessToken = axiosClient.post<GetAccessTokenResponse>(
    accessTokenEnpoint,
    getAccessTokenRequestBody,
    {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${client_secret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `JSESSIONID=${jSessionId}`,
      },
    },
  );

  const selectAccessToken = (response: AxiosResponse<GetAccessTokenResponse>) => response.data;

  const { data, error: accessTokenError } = await tryCatch(getAccessToken, selectAccessToken);

  if (accessTokenError) {
    const error = isAxiosError(accessTokenError)
      ? (accessTokenError.response?.data.error === 'invalid_grant' ? INVALID_CREDENTIALS : accessTokenError.response?.data.error)
      : accessTokenError.message;
    const status = isAxiosError(accessTokenError) ? accessTokenError.response?.status : 500;
    return new Response(
      JSON.stringify({ error }),
      {
        headers: { 'Content-Type': 'application/json' },
        status,
      },
    );
  }

  return new Response(
    JSON.stringify({ accessToken: data.access_token, refreshToken: data.refresh_token }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
