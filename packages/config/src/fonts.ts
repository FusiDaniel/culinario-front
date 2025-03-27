/* eslint-disable perfectionist/sort-objects */
import { createFont } from 'tamagui';

export const size = {
  h1: 20,
  h2: 16,
  body1: 14,
  body2: 14,
  body3: 12,
};

export const weight = {
  h1: '700',
  h2: '700',
  body1: '400',
  body2: '400',
  body3: '300',
};

export const lineHeight = {
  h1: 1.4,
  h2: 1.4,
  body1: 1.4,
  body2: 1.4,
  body3: 1.4,
};

export const font = createFont({
  family: 'DMSans, Helvetica, Arial, sans-serif',
  size,
  weight,
  lineHeight: Object.entries(lineHeight).reduce((acc, [key, value]) => {
    acc[key] = size[key] * value;
    return acc;
  }, {} as Record<keyof typeof size, number>),
  face: {
    300: { normal: 'DMSansLight' },
    400: { normal: 'DMSansRegular' },
    600: { normal: 'DMSansSemibold' },
    700: { normal: 'DMSansBold' },
    800: { normal: 'DMSansExtrabold' },
  },
});
