module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'eslint-plugin-simple-import-sort',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'react/display-name': 'off',
    // 'import/no-unresolved': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
