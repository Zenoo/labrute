// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.git/**',
      '**/build/**',
      '**/dist/**',
      '**/lib/**',
      '**/coverage/**',
      'prisma/**',
      '**/public/**',
      '**/*.d.ts',
      'Procfile',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
    },
    rules: {
      // TypeScript rules
      'no-undef': 'off', // TypeScript handles this
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',

      // General rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      camelcase: 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',

      // Import rules
      'import-x/order': 'off',
      'import-x/no-unresolved': 'error',
      'import-x/no-default-export': 'error',
      'import-x/prefer-default-export': 'off',
      'import-x/no-named-as-default-member': 'off',

      // Style rules
      'linebreak-style': 'off',
      'prefer-promise-reject-errors': 'off',
      'no-restricted-syntax': 'off',
      'no-param-reassign': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'import-x/no-named-as-default-member': 'off',
    },
  },
  {
    files: ['**/eslint.config.js'],
    rules: {
      // ESLint plugins expose CommonJS defaults that the static import resolver cannot always see.
      'import-x/default': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    // All workspaces inherit the same mechanical readability rules.
    rules: {
      // Intentional unused bindings use the same underscore convention in source and JS tests.
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
      curly: ['error', 'all'],
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'max-statements-per-line': ['error', { max: 1 }],
      'no-nested-ternary': 'error',
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2,
            consistent: true,
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 3,
            consistent: true,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 3,
            consistent: true,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 3,
            consistent: true,
          },
        },
      ],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'import',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'import',
          next: 'import',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['block-like', 'return'],
        },
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['singleline-const', 'singleline-let'],
          next: ['singleline-const', 'singleline-let'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['multiline-const', 'multiline-let'],
        },
      ],
      // Core indent cannot handle some JSX trees; React's rules format those in the client.
      indent: ['error', 2, {
        SwitchCase: 1,
        ignoredNodes: ['JSXElement', 'JSXFragment'],
      }],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
    },
  },
];
