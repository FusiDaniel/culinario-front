module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@repo/ui': '../../packages/ui',
            // define aliases to shorten the import paths
            'app': '../../packages/app',
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
          root: ['../..'],
        },
      ],
      // if you want reanimated support
      // 'react-native-reanimated/plugin',
      ...(process.env.EAS_BUILD_PLATFORM === 'android'
        ? []
        : [
            [
              '@tamagui/babel-plugin',
              {
                components: ['@repo/ui', 'tamagui'],
                config: '../../packages/config/src/tamagui.config.ts',
                disableExtraction: process.env.NODE_ENV === 'development',
                logTimings: true,
              },
            ],
          ]),
    ],
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
  };
};
