module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: [
    '@react-native',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'eslint-plugin-simple-import-sort',
    'prettier',
    'react-hooks',
    'unused-imports',
    'sonarjs',
  ],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'react/display-name': 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-console': 'warn',
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
