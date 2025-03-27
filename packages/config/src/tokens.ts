/* eslint-disable perfectionist/sort-objects */
import { createTokens } from 'tamagui';

export const tokens = createTokens({
  color: {
    lightText: '#ffffff',
    darkText: '#1f2937',
    primary: 'hsla(81, 70%, 40%, 1)',
    primaryOpacity: 'hsla(81, 70%, 40%, 0.1)',
    primaryDark: 'hsla(81, 70%, 30%, 1)',
    primaryLight: 'hsla(81, 70%, 60%, 1)',
    secundary: 'hsla(240, 33%, 40%, 1)',
    secundaryDark: 'hsla(240, 33%, 30%, 1)',
    secundaryLight: 'hsla(240, 33%, 60%, 1)',
  },
  radius: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    max: 999,
    true: 8,
    none: 0,
  },
  size: {
    md: 10,
    true: 10, // this means "md" is your default size
  },
  space: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    18: 72,
    20: 80,
    22: 88,
    24: 96,
    true: 4,
    none: 0,
  },
  zIndex: {
    md: 10,
    true: 10, // this means "md" is your default size
  },
});
