/* eslint-disable ts/no-require-imports */
/* eslint-disable import/no-default-export */
import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  plugins: [],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
};

export default config;
