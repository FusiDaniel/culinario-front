import type { AxiosInstance } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { signOut } from '../signOut';

export const applyInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (request) => {
    const token = await SecureStore.getItemAsync('accessToken');
    if (token)
      request.headers.Authorization = `Bearer ${token}`;
    return request;
  });

  axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
      if (error.response?.status === 401)
        await signOut('/login');

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
