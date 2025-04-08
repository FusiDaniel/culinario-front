// import { queryClient } from 'providers';
import axios from 'axios';
import { env } from '../enviroments';

export const signOut = () =>
  axios.post(`${env.APP_GATEWAY_PROVIDER_URL}/api/gateway/sign-out`).then(response =>
    // queryClient.clear();
    response,
  );
