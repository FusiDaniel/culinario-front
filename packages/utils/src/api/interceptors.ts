import type { AxiosInstance } from 'axios';
import * as SecureStore from 'expo-secure-store';

export const applyInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (request) => {
    const token = await SecureStore.getItemAsync('accessToken');
    if (token)
      request.headers.Authorization = `Bearer ${token}`;
    return request;
  });
  return axiosInstance;
};
