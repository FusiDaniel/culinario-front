import { queryClient } from 'app/provider';
import axios from 'axios';
import { env } from '../enviroments';

export const signOut = async (callbackUrl: string = '/') => {
  await axios.post(`${env.APP_GATEWAY_PROVIDER_URL}/api/sign-out`);
  queryClient.clear();
  window.location.href = callbackUrl;
};
