// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
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
      '.eslintrc.cjs',
      '.eslintrc.js',
      'client/.eslintrc.js',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
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
      '@typescript-eslint/no-var-requires': 'off',
      'linebreak-style': 'off',
      'eol-last': 'off',
      'no-nested-ternary': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import/prefer-default-export': 'off',
      camelcase: 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',
      'import/no-default-export': 'off',
    },
  }
);
