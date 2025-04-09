import { env } from '../enviroments';

export const baseURL = {
  gateway: `${env.APP_GATEWAY_PROVIDER_URL}/api/gateway/`,
  next: `${env.APP_GATEWAY_PROVIDER_URL}/api/`,
};
