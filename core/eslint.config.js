// @ts-check
import rootConfig from '../eslint.config.js';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/lib/**',
      '**/*.d.ts',
    ],
  },
  ...rootConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
      },
    },
    settings: {
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import-x/resolver': {
        typescript: {},
        node: {
          moduleDirectory: ['node_modules', './'],
        },
      },
    },
    rules: {
      'import-x/extensions': [
        'error',
        {
          js: 'never',
          ts: 'never',
          json: 'always',
        },
      ],
    },
  }
];
