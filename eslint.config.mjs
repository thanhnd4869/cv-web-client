import pluginJs from '@eslint/js';
import airbnbConfig from 'eslint-config-airbnb';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        ignores: ['**/webpack.config.js'],
        languageOptions: {
            globals: globals.browser,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            js: pluginJs,
            react: pluginReact,
            'simple-import-sort': simpleImportSort,
            import: importPlugin,
            'jsx-a11y': jsxA11y,
        },
        settings: {
            react: {
                pragma: 'React',
                version: '18.0',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    moduleDirectory: ['node_modules', './'],
                },
            },
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...pluginReact.configs.flat.recommended.rules,
            ...airbnbConfig.rules,
            ...prettierConfig.rules,
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'no-eval': 'error',
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                },
            ],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react', '^@?\\w'],
                        ['^(@|src)(/.*|$)'],
                        ['^\\u0000'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        ['^.+\\.?(css|scss)$'],
                    ],
                },
            ],
            'jsx-a11y/anchor-is-valid': [
                'error',
                {
                    components: ['Link'],
                    specialLink: ['to'],
                    aspects: ['noHref', 'invalidHref', 'preferButton'],
                },
            ],
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: '*', next: 'if' },
                { blankLine: 'always', prev: '*', next: 'for' },
                { blankLine: 'always', prev: '*', next: 'while' },
                { blankLine: 'always', prev: '*', next: 'switch' },
            ],
        },
    },
];
