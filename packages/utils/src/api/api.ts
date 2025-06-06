import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { applyInterceptors } from './interceptors';
import { baseURL } from './providers';

type ApiRequestConfig = AxiosRequestConfig & {
  provider?: 'gateway' | 'next';
};

const DEFAULT_TIMEOUT = 10000;

export const api = (() => {
  const baseInstance = axios.create({
    timeout: DEFAULT_TIMEOUT,
  });

  const axiosInstance = applyInterceptors(baseInstance);

  const request = <RequestReturnType>(config?: ApiRequestConfig) => {
    if (!config)
      return axiosInstance<RequestReturnType>({ baseURL: baseURL.gateway });
    const { provider = 'gateway', ...rest } = config;
    return axiosInstance<RequestReturnType>({ ...rest, baseURL: baseURL[provider] });
  };

  return {
    delete: <RequestReturnType>(url: string, config?: ApiRequestConfig) =>
      request<RequestReturnType>({
        ...config,
        method: 'delete',
        url,
      }),
    get: <RequestReturnType>(url: string, config?: ApiRequestConfig) => request<RequestReturnType>({
      ...config,
      method: 'get',
      url,
    }).then(response => response.data),
    patch: <RequestReturnType>(url: string, data: unknown = null, config?: ApiRequestConfig) =>
      request<RequestReturnType>({
        ...config,
        data,
        method: 'patch',
        url,
      }),
    post: <RequestReturnType>(url: string, data: unknown = null, config?: ApiRequestConfig) =>
      request<RequestReturnType>({
        ...config,
        data,
        method: 'post',
        url,
      }),
    put: <RequestReturnType>(url: string, data: unknown = null, config?: ApiRequestConfig) => request<RequestReturnType>({
      ...config,
      data,
      method: 'put',
      url,
    }),
  };
})();
