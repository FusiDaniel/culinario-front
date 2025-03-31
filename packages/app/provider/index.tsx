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
  QueryClientProvider
} from '@tanstack/react-query';
import { useColorScheme } from 'react-native';
import { ToastViewport } from './ToastViewport';

export const Provider = ({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) => {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

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
