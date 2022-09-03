module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['**/*.js', '**/*.d.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    'tsdoc/syntax': 'warn',
    'linebreak-style': 'off',
    'eol-last': 'off',
    // These 3 are due to the Node16 module resolution, not sure why
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'node/no-missing-import': 'off',
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    "import/no-named-default": "off",
    "no-nested-ternary": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }]
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
};
