import antfu from '@antfu/eslint-config';
import pluginPreferArrow from 'eslint-plugin-prefer-arrow';
import turboPlugin from 'eslint-plugin-turbo';

const ignores = [
  'node_modules',
  '**/babel.config.cjs',
  '**/node_modules',
  '**/metro.config.js',
  '.yarn/*',
  '.yarn/*/**',
  '**/.expo/*',
  '**/.next/*',
  'out/',
  'out/**/',
  '**/.tamagui/*',
  'build',
  'build/**',
  'npm-debug.log*',
  '**/npm-debug.log*/**',
  'yarn-debug.log*',
  '**/yarn-debug.log*/**',
  'yarn-error.log*',
  '**/yarn-error.log*/**',
  '.pnpm-debug.log*',
  '**/.pnpm-debug.log*/**',
  '.env.local',
  '**/.env.local/**',
  '.env.development.local',
  '**/.env.development.local/**',
  '.env.test.local',
  '**/.env.test.local/**',
  '.env.production.local',
  '**/.env.production.local/**',
  '.vercel',
  '**/.vercel/**',
  '*.tsbuildinfo',
  '**/*.tsbuildinfo/**',
  '.DS_Store',
  '**/.DS_Store/**',
  'THUMBS_DB',
  '**/THUMBS_DB/**',
  'thumbs.db',
  '**/thumbs.db/**',
  '**/.turbo/*',
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
  '**/.tamagui/*',
  '**/ios',
  '**/android',
];

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  { ignores },
  ...(await antfu({
    jsx: true,
    plugins: {
      'prefer-arrow': pluginPreferArrow,
    },
    react: true,
    rules: {
      'antfu/no-top-level-await': 'off',
      'antfu/top-level-function': 'off',
      'arrow-body-style': 'error',
      'import/no-default-export': 'error',
      'no-console': 'warn',
      'node/prefer-global/buffer': 'off',
      'node/prefer-global/process': 'off',
      'perfectionist/sort-array-includes': 'error',
      'perfectionist/sort-classes': 'error',
      'perfectionist/sort-enums': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-interfaces': 'error',
      'perfectionist/sort-maps': 'error',
      'perfectionist/sort-object-types': 'error',
      'perfectionist/sort-objects': 'error',
      'perfectionist/sort-union-types': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          classPropertiesAllowed: false,
          disallowPrototype: true,
          singleReturnOnly: false,
        },
      ],
      'react-refresh/only-export-components': 'off',
      'react/no-children-map': 'off',
      'react/no-nested-components': 'error',
      'react/prefer-shorthand-boolean': 'error',
      'regexp/no-obscure-range': 'off',
      'regexp/no-super-linear-backtracking': 'off',
      'test/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
      'ts/consistent-type-definitions': ['error', 'type'],
      'ts/no-floating-promises': 'off',
      'ts/no-misused-promises': 'off',
      'ts/no-unsafe-argument': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-call': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/promise-function-async': 'off',
      'ts/strict-boolean-expressions': 'off',
      'ts/unbound-method': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    stylistic: {
      indent: 2,
      jsx: true,
      quotes: 'single',
      semi: true,
    },
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  })),
  {
    files: [
      '**/pages/**/*.tsx',
      '**/pages/**/*.ts',
      '**/app/**/*.tsx',
      '**/app/**/*.ts',
      '**/tamagui.config.ts',
      '**/jest.config.ts',
      '**/commitlint.config.ts',
      '**/eslint.config.*',
      '**/next.config.js',
      '**/dayjs.ts',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
];
