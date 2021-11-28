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
    'react-native-reanimated/plugin',
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        test: "./test",
        components: './src/components',
        utils: './src/utils',
        types: './src/types',
        hooks: './src/hooks',
        resources: './src/resources',
        assets: './src/assets',
        services: './src/services',
        constants: './src/constants',
      }
    }],
  ],
};
