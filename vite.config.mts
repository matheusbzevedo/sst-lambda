/// <reference types='vitest' />

import { configDefaults, defineConfig } from 'vitest/config';

const coverage = 80;

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    watch: false,
    coverage: {
      all: false,
      exclude: [...configDefaults.coverage.exclude!, 'spec/mock/**'],
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
      thresholds: {
        branches: coverage,
        functions: coverage,
        lines: coverage,
        statements: coverage,
      },
    },
    exclude: [
      ...configDefaults.exclude,
      'spec/mock/**',
      'src/framework/middlewares/test-params-route-schema',
      'src/framework/middlewares/test-post-body-schema',
    ],
  },
});
