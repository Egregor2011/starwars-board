module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'comma-dangle': ['off', 'never'],
    'no-await-in-loop': 'off',
    'implicit-arrow-linebreak': 0,
    '@typescript-eslint/no-var-requires': 'off',
    'import/prefer-default-export': 'warn',
    'import/extensions': 'off',
    camelcase: 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'no-restricted-syntax': [
      'error',
      'FunctionExpression',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    'object-curly-newline': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};
