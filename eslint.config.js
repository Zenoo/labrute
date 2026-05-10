// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.git/**',
      '**/build/**',
      '**/dist/**',
      '**/lib/**',
      '**/*.js',
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
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-var-requires': 'off',
      "@typescript-eslint/no-non-null-assertion": "error",

      // General rules
      'eol-last': 'off',
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
      'no-nested-ternary': 'off',
      'object-curly-newline': [
        'error',
        {
          ImportDeclaration: { multiline: true, minProperties: 3 },
        },
      ],
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
      'no-restricted-syntax': 'off',
      'no-param-reassign': 'off',
      indent: 'off',
    },
  }
];
