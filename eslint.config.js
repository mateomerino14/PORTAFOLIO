import js from '@eslint/js';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import {defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig([globalIgnores(['dist', 'storybook-static']), {
  files: ['**/*.{js,jsx}'],
  extends: [
    js.configs.recommended,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
  ],
  languageOptions: {
    globals: {...globals.browser, ...globals.node},
    parserOptions: {ecmaFeatures: {jsx: true}},
  },
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'object-curly-spacing': ['error', 'never'],
    'brace-style': ['error', 'stroustrup'],
    'prefer-const': 'error',
    'no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z_]'}],
  },
}, ...storybook.configs['flat/recommended']]);
