import type { TamaguiProviderProps } from '@repo/ui';
import {
  config,
  CustomToast,
  isWeb,
  TamaguiProvider,
  ToastProvider,
} from '@repo/ui';
import { useColorScheme } from 'react-native';
import { ToastViewport } from './ToastViewport';

export const Provider = ({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) => {
  const colorScheme = useColorScheme();

  return (
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
  );
};
