// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/lib/**',
      '**/*.d.ts',
      '.eslintrc.js',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        browser: true,
        es2021: true,
      },
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        typescript: {},
        node: {
          moduleDirectory: ['node_modules', './'],
        },
      },
    },
    rules: {
      // TypeScript rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            properties: false,
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
      '@typescript-eslint/no-use-before-define': ['error'],

      // Import rules
      'import/extensions': [
        'error',
        {
          js: 'never',
          ts: 'never',
          json: 'always',
        },
      ],
      'import/order': 'off',
      'import/no-unresolved': 'error',
      'import/no-default-export': 'error',
      'import/prefer-default-export': 'off',

      // General rules
      'linebreak-style': 'off',
      'no-nested-ternary': 'off',
      'object-curly-newline': [
        'error',
        {
          ImportDeclaration: { multiline: true, minProperties: 3 },
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'prefer-promise-reject-errors': 'off',
      'comma-dangle': 'off',
      'eol-last': 'off',
      'no-use-before-define': 'off',
      'no-plusplus': 'off',
      'no-restricted-syntax': 'off',
      'no-continue': 'off',
      'no-param-reassign': 'off',
    },
  }
);
