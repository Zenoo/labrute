module.exports = {
  root: true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {},
      "node": {
        "moduleDirectory": ["node_modules", "./"]
      }
    },
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'tsconfigRootDir': __dirname,
    'project': ['./tsconfig.json']
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    'import',
  ],
  'rules': {
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/extensions': [
      'error',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'json': 'always',
      }
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    "react/function-component-definition": ['error', {
      "namedComponents": "arrow-function",
    }],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.ts', '.tsx'] }],
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-nested-ternary': 'off',
    "object-curly-newline": ["error", {
        "ImportDeclaration": "never",
    }],
    'import/order': 'off',
    "import/no-unresolved": "error",
    "jsx-a11y/anchor-is-valid": "off",
    "import/no-named-default": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "properties": false,
          "attributes": false
        }
      }
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      { ignoreIIFE: true }
    ],
    "max-len": ["error", {
      "code": 100,
      "ignoreComments": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],
    "prefer-promise-reject-errors": 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    "no-shadow": "off",
    'import/prefer-default-export': 'off',
  },
};
