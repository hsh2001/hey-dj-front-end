// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
  },
  ignorePatterns: ['node_modules', 'build', 'coverage', 'out'],
  plugins: ['import', 'eslint-comments'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  globals: {
    BigInt: true,
    console: true,
    WebAssembly: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',
    'import/order': [
      'error',
      { 'newlines-between': 'always', alphabetize: { order: 'asc' } },
    ],
    'sort-imports': [
      'error',
      { ignoreDeclarationSort: true, ignoreCase: true },
    ],
  },
};