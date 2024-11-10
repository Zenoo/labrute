module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  root: true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    "import/resolver": {
      "typescript": {},
      "node": {
        "moduleDirectory": ["node_modules", "./"]
      }
    },
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': false
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'tsconfigRootDir': __dirname,
    'project': ['./tsconfig.json']
  },
  'plugins': [
    '@typescript-eslint',
    'import',
  ],
  'rules': {
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'linebreak-style': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    'import/extensions': [
      'error',
      {
        'js': 'never',
        'ts': 'never',
        'json': 'always',
      }
    ],
    'no-nested-ternary': 'off',
    "object-curly-newline": ["error", {
        "ImportDeclaration": "never",
    }],
    'import/order': 'off',
    "import/no-unresolved": "error",
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
    "no-restricted-syntax": "off",
    "import/prefer-default-export": "off",
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error'
  },
};
