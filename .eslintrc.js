module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react-native'],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
