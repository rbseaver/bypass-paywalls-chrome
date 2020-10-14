/* eslint-disable immutable/no-mutation */
module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'jest/globals': true
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      templateStrings: true,
      arrowFunctions: true,
      forOf: true,
      impliedStrict: true
    }
  },
  plugins: ['immutable', 'jest'],
  rules: {
    'immutable/no-mutation': 0,
    'no-console': 0,
    'comma-dangle': 'off',
    'no-tabs': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'prefer-arrow-callback': 'off',
    'quotes': 'off',
    'func-names': 'off',
    'no-unused-vars': 'warn'
  }
};
