import { env } from '../enviroments';

export const baseURL = {
  gateway: `${env.APP_GATEWAY_PROVIDER_URL}/api/app/gateway/`,
  next: `${env.APP_GATEWAY_PROVIDER_URL}/api/app/`,
};
