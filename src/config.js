'use strict';

module.exports = {
  env: { browser: true, es2022: true, commonjs: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    // This must be the last
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'jsdoc'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/extensions': [2, 'always', { ignorePackages: true, pattern: { js: 'never' } }],
  },
  ignorePatterns: ['node_modules'],
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.json'] } },
    'import/extensions': ['.js', '.mjs'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
};
