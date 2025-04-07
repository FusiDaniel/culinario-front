import axios from 'axios';

// Erros que podem ocorrer 
// res.status(400).json({ text: 'Invalid credentials' });
// res.status(500).json({ text: 'Internal Server Error' });
// res.status(405).json({ text: 'Method Not Allowed' }); ????
// Se redirecionar para login tbm é provavelmente um 400 'Invalid credentials'

// Primeiro: 302 e mandar para /                (certo)
//           302 e mandar para /login?error     (invalid credentials)
//           500                                (internal server error)

// Segundo:  302 e mandar para /urlConfigurada  (certo)
//           302 e mandar para /login           (invalid credentials)
//           500                                (internal server error)

// Terceiro: 201                                (certo)
//           400 invalid_grant                  (invalid credentials)
//           500                                (internal server error)


export const POST = async (request: Request) => {
  const axiosClient = axios.create({
    maxRedirects: 0,
    validateStatus: status => status >= 200 && status < 400,
    withCredentials: true,
  });

  const host = 'http://localhost:8080';
  const { password, username } = await request.json();
  const clientId = 'culinario';
  const client_secret = 'culinario123';
  const redirectURI = 'https://oidcdebugger.com/debug';
  const loginEndpoint = `${host}/login`;
  const oAuthAutorizeEndpoint = `${host}/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}`;
  const oAuthTokenEnpoint = `http://localhost:8080/oauth2/token`;

  let JSESSIONID = '';
  let code = '';
  let data: Record<string, number | string> = {};

  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const fetchResponse = await axiosClient.post(loginEndpoint, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    JSESSIONID = `${fetchResponse.headers['set-cookie']?.[0].split(';')[0].split('=')[1]}`;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
    //   console.error(error);
      console.error('Erro etapa 1');
    }
  }

  try {
    const fetchResponse = await axiosClient(oAuthAutorizeEndpoint, {
      headers: { Cookie: `JSESSIONID=${JSESSIONID}` },
      method: 'GET',
    });
    const responseLocationURL = fetchResponse.headers.location;
    const index = responseLocationURL.indexOf('code=');
    const codeFromResponse = responseLocationURL.substring(index + 5);
    code = codeFromResponse;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
    //   console.error(error);
      console.error('Erro etapa 2');
    }
  }

  const oAuthRequestBody = new URLSearchParams();
  oAuthRequestBody.append('grant_type', 'authorization_code');
  oAuthRequestBody.append('code', code);
  oAuthRequestBody.append('redirect_uri', redirectURI);

  try {
    const fetchResponse = await axiosClient.post(oAuthTokenEnpoint, oAuthRequestBody, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${client_secret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `JSESSIONID=${JSESSIONID}`,
      },
    });
    data = fetchResponse.data;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
    //   console.error(error);
      console.error('Erro etapa 3');
    }
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
};
