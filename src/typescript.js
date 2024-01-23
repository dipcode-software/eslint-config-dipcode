'use strict';

const base = require('./config');

module.exports = {
  env: { ...base.env },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    // This must be the last line
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', ...base.plugins],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json', sourceType: 'module' },
  rules: {
    ...base.rules,
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/extensions': [2, 'always', { ignorePackages: true, pattern: { js: 'never', ts: 'never', tsx: 'never' } }],
  },
  settings: {
    ...base.settings,
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'] },
    'import/resolver': {
      node: { extensions: [...base.settings['import/resolver'].node.extensions, '.ts', '.tsx', '.d.ts'] },
    },
    'import/extensions': [...base.settings['import/extensions'], '.ts', '.tsx', '.d.ts'],
  },
  overrides: [{ files: ['*.ts', '*.tsx'], rules: { 'import/named': 'off', 'import/no-unresolved': 'off' } }],
};
