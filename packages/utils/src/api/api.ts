import axios from 'axios';
import { env } from '../enviroments';
import { applyInterceptors } from './interceptors';

const DEFAULT_TIMEOUT = 10000;

export const api = (() => {
  const baseInstance = axios.create({
    baseURL: `${env.APP_GATEWAY_PROVIDER_URL}/api/gateway/`,
    timeout: DEFAULT_TIMEOUT,
  });

  const axiosInstance = applyInterceptors(baseInstance);

  return axiosInstance;
})();
