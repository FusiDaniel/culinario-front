import {
    QueryClient
} from '@tanstack/react-query';
import { isAxiosError } from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: process.env.NODE_ENV === 'production',
      retry: (failureCount, error) => {
        if (isAxiosError(error) && error.response?.status && [401, 404].includes(error.response.status))
          return false;
        return failureCount < 3;
      },
    },
  },
});
