/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin');

const plugins = [
  withTamagui({
    appDir: true,
    components: ['tamagui', '@repo/ui'],
    config: '../../packages/config/src/tamagui.config.ts',
    disableExtraction: process.env.NODE_ENV === 'development', // Prevents extraction issues
    excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    reactStrictMode: true,
  }),
];

module.exports = () => {
  /** @type {import('next').NextConfig} */
  let config = {
    experimental: {
      scrollRestoration: true,
    },
    modularizeImports: {
      '@tamagui/lucide-icons': {
        skipDefaultConversion: true,
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
      },
    },
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
    ],
    typescript: {
      ignoreBuildErrors: true,
    },
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};
