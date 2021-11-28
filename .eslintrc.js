module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@react-native-community',
  plugins: ['simple-import-sort, @typescript-eslint/eslint-plugin'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    },
  },
};
