module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module:react-native-dotenv'],
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
          store: './src/store',
          HOC: './src/HOC',
          screens: './src/screens',
          navigation: './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
