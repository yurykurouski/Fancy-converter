module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
    // 'plugin:prettier/recommended',
    // 'plugin:/@typescript-eslint',
    // 'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    // '@typescript-eslint',
    // 'prettier',
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
  ],
};
