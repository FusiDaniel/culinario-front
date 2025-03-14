import { nextJsConfig } from '@repo/eslint-config/next-js';

/** @type {import("eslint").Linter.Config} */
export default {
  ...nextJsConfig,
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'], // Update to include `src`
      rules: {
        // Add any specific rules if needed
      },
    },
  ],
};
