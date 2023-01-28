/** @type {import('jest').Config} */
module.exports = {
  modulePathIgnorePatterns: ['dist'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*',
    '!<rootDir>/src/examples/**/*',
    // jest doesn't properly collect coverage from barrel files
    '!<rootDir>/src/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^~': '<rootDir>/src',
    '^~/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
}
