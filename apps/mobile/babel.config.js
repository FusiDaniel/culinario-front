module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@repo/ui': '../../packages/ui',
            // '@repo': '../../packages',
          },
        },
      ],
    ],
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
};
