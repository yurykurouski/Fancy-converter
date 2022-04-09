module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          test: './test',
          components: './src/components',
          utils: './src/utils',
          types: './src/types',
          hooks: './src/hooks',
          resources: './src/resources',
          assets: './src/assets',
          services: './src/services',
          constants: './src/constants',
          context: './src/context',
        },
      },
    ],
    [
      '@babel/plugin-transform-spread',
      {
        loose: true,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
