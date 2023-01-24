/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
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
}
