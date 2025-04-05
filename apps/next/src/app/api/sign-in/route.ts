import axios from 'axios';

export const POST = async (request: Request) => {
  const axiosClient = axios.create({
    maxRedirects: 0,
    withCredentials: true,
  });

  const host = 'http://localhost:8080';
  const { password, username } = await request.json();
  const clientId = 'culinario';
  const client_secret = 'culinario123';
  const redirectURI = 'https://oidcdebugger.com/debug';

  const loginEndpoint = `${host}/login`;
  const authEndpoint = `${host}/oauth2/authorize`;

  const authRequest = `${authEndpoint}?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}`;

  let JSESSIONID = '';

  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const _fetchResponse = await axiosClient.post(loginEndpoint, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      JSESSIONID = `${error.response?.headers['set-cookie']?.[0].split(';')[0].split('=')[1]}`;
    }
  }

  //   console.log('JSESSIONID', JSESSIONID);

  let code = '';

  try {
    const _fetchResponse = await axiosClient(authRequest, {
      headers: { Cookie: `JSESSIONID=${JSESSIONID}` },
      method: 'GET',
    });
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
    //   console.log(error.request?._header, error.response?.headers);
      const responseLocationURL = error.response?.headers.location;
      const index = responseLocationURL.indexOf('code=');
      const codeFromResponse = responseLocationURL.substring(index + 5);
      code = codeFromResponse;
    }
  }

  const oAuthRequest = `http://localhost:8080/oauth2/token`;

  const oAuthRequestBody = new URLSearchParams();
  oAuthRequestBody.append('grant_type', 'authorization_code');
  oAuthRequestBody.append('code', code);
  oAuthRequestBody.append('redirect_uri', redirectURI);

  let data: Record<string, number | string> = {};

  try {
    const fetchResponse = await axiosClient.post(oAuthRequest, oAuthRequestBody, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${client_secret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `JSESSIONID=${JSESSIONID}`,
      },
    });
    data = fetchResponse.data;
    console.log(fetchResponse);
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
    //   console.log(error.request?._header, error.response?.headers);
    }
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
};
