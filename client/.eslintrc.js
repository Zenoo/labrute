module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    "airbnb",
    "airbnb/hooks",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": ["./tsconfig.json"]
  },
  "plugins": [
    '@typescript-eslint',
    "eslint-plugin-tsdoc",
    "react",
  ],
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "linebreak-style": ["error", "windows"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/extensions": [
      "error",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "json": "always",
      }
    ],

    "object-curly-newline": ["error", {
      "ImportDeclaration": "never"
    }],
    "init-declarations": ["error", "always"],
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": true,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": false
      }
    }, {
        "enforceForRenamedProperties": true
      }],
    "no-undefined": "error",
    "no-empty-function": [
      "error",
      {
        "allow": ["arrowFunctions"]
      }
    ],
    "prefer-named-capture-group": "error",
    "no-underscore-dangle": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "no-implicit-coercion": "off",
    "no-use-before-define": "error",
    "import/no-named-default": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "space-infix-ops": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/display-name": "error",
    "react/forbid-prop-types": "off",
    "react/jsx-sort-default-props": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "never",
        "children": "ignore"
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": "off",
    "react/no-multi-comp": "error",
    "no-nested-ternary": "off",
    "linebreak-style": 0,
    "sort-imports": "off",
    "no-restricted-globals": "off",
    "react/destructuring-assignment": "off",
    "eol-last": "off",
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/jsx-one-expression-per-line": "off"
  }
}
