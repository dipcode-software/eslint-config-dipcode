'use strict';

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    // This must be the last
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'jsdoc'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: 'tsconfig.json', sourceType: 'module' },
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/extensions': [
      2,
      'always',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          ts: 'never',
          tsx: 'never',
        },
      },
    ],
  },
  ignorePatterns: ['node_modules'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  overrides: [{ files: ['*.ts', '*.tsx'], rules: { 'import/named': 'off', 'import/no-unresolved': 'off' } }],
};
