/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest",
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};
