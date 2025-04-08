import type { AxiosInstance } from 'axios';
import { signOut } from '../signOut';

export const applyInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
      if (error.response?.status === 401) {
        await signOut();
        window.location.href = `/login?callbackUrl=${window.location.pathname}`;
      }
      return Promise.reject(error);
    },
  );
  return axiosInstance;
};
