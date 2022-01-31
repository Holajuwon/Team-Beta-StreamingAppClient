module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': [1, 170, 2, { ignoreComments: true }],
    'react/prop-types': [0],
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'no-shadow': ['off'],
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'class-methods-use-this': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': 'off',
  },
};
