module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'eslint-plugin-simple-import-sort',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
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
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react$', '^react-native$', 'react', '^next', '^@', '^[a-z]'],
              ['^~'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.styles$'],
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
