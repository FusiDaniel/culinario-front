import type { TamaguiProviderProps } from '@repo/ui';
import {
  config,
  CustomToast,
  isWeb,
  TamaguiProvider,
  ToastProvider,
} from '@repo/ui';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useColorScheme } from 'react-native';
import { ToastViewport } from './ToastViewport';

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

export const Provider = ({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) => {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider
        config={config}
        defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
        {...rest}
      >
        <ToastProvider swipeDirection="horizontal" duration={6000} native={isWeb ? [] : ['mobile']}>
          {children}
          <CustomToast />
          <ToastViewport />
        </ToastProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
};
