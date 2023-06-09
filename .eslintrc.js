const tsconfigPaths = require('./tsconfig.paths.json')

const aliases = Object.keys(tsconfigPaths.compilerOptions.paths).map((aliasTs) => aliasTs.split('/')[0])
const projectAliases = [...new Set(aliases)].join('|')

const builtInModules = require('module').builtinModules.join('|')

const commonRestrictedImportPatterns = [
  {
    group: ['@Components/**/_internal/**'],
    message: 'Do not import internal components outside their context',
  },
]

const commonRestrictedImportPaths = [
  {
    name: 'react',
    importNames: ['default'],
    message: "import React from 'react' is not needed",
  },
  {
    name: '@mui/material',
    importNames: [
      'useTheme',
      'Theme',
      'createStyles',
      'StyleRules',
      'responsiveFontSizes',
      'StylesProvider',
      'ThemeProvider',
    ],
    message: 'Theme & styles related imports must be from @mui/material/styles',
  },
]

const reduxRestrictedImportPattern = {
  group: ['@Redux/**'],
  message: '@Redux dependency cannot be used in presentational or design system components',
}

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': 'typescript',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['@emotion', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-redundant-roles': [
      'error',
      {
        ul: ['list'],
      },
    ],
    'no-console': 'error',
    'max-depth': ['error', 2],
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-imports': [
      'error',
      {
        patterns: commonRestrictedImportPatterns,
        paths: commonRestrictedImportPaths,
      },
    ],
    'object-shorthand': 'warn',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: ['return', 'block-like'] }],
    'react-hooks/exhaustive-deps': 'error',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/no-invalid-html-attribute': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [`^(${builtInModules})(/|$)`], // Packages. `react` related packages come first.
          ['^react', '^@?\\w'], // Side effect imports.
          ['^\\u0000'], // Project aliases
          [`^(${projectAliases})(/.*|$)`], // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Other relative imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^\\./styles$'], // Other Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['src/**/*.test.ts?(x)'],
      extends: ['react-app/jest'],
      rules: {
        'testing-library/prefer-query-by-disappearance': 'error',
        'testing-library/prefer-explicit-assert': ['error', { assertion: 'toBeInTheDocument' }],
      },
    },
    {
      files: ['src/**/styles.ts', 'src/styles/**/*.ts'],
      rules: {
        'sort-keys': ['error', 'asc', { caseSensitive: false }],
      },
    },
    {
      files: ['src/components/designSystem/icons/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: commonRestrictedImportPaths,
            patterns: [
              ...commonRestrictedImportPatterns,
              {
                group: ['@Svg/**', '**/*.svg'],
                message: 'use lazy load with "svgLazyLoader" utility instead of directly import svg',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['!src/hooks/sdk/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: commonRestrictedImportPatterns,
            paths: [
              ...commonRestrictedImportPaths,
              {
                name: '@Contexts/sdk/SdkContext',
                importNames: ['useSdkState'],
                message: 'use specific SDK hooks from @Hooks/sdk',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['src/components/designSystem/**/*.tsx'],
      excludedFiles: ['src/components/designSystem/**/*.stories.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: commonRestrictedImportPaths,
            patterns: [
              ...commonRestrictedImportPatterns,
              reduxRestrictedImportPattern,
              {
                group: ['@Components/presentational/**', '@Components/container/**'],
                message: 'Do not import presentational or container into design system components',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['src/components/presentational/**/*.tsx'],
      excludedFiles: ['src/components/presentational/**/*.stories.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: commonRestrictedImportPaths,
            patterns: [
              ...commonRestrictedImportPatterns,
              reduxRestrictedImportPattern,
              {
                group: ['@Components/container/**'],
                message: 'Do not import container into presentational components',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['**/*.step-defs.tsx'],
      rules: {
        'func-names': 'off',
      },
    },
  ],
  ignorePatterns: ['!.storybook', 'cache', 'node_modules', '.storybook'],
}
