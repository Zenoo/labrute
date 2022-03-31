module.exports = {
  root: true,
  env: {
    node: true
  },
  "ignorePatterns": ["**/*.js"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    "eslint-plugin-tsdoc"
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': "off",
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
    "tsdoc/syntax": "warn"
  },
  "settings": {
    "node": {
        "tryExtensions": [".js", ".json", ".node", ".ts", ".d.ts"]
    },
  }
};