import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';
import { animations } from './animations';
import { font } from './fonts';
import { themes } from './themes';
import { tokens } from './tokens';

export const config = createTamagui({
  ...defaultConfig,
  animations,
  defaultFont: 'body',
  fonts: {
    body: font,
    heading: font,
  },
  themes,
  tokens,
});
