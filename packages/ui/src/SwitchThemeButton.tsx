import { useRootTheme, useThemeSetting } from '@tamagui/next-theme';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'tamagui';
import { Button } from './Button';
export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting();
  const [theme] = useRootTheme();

  const [clientTheme, setClientTheme] = useState<string | undefined>('light');

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme);
  }, [themeSetting.current, themeSetting.resolvedTheme]);

  return (
    <Button variant='secondary' onPress={() => themeSetting.set(clientTheme === 'light' ? 'dark' : 'light')}>
      {clientTheme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
};
