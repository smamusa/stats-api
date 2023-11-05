/** @type {import('jest').Config} */

const jestConfig = {
  testEnvironment: 'node',
  roots: ['src'],
  transform: { '\\.[jt]sx?$': ['ts-jest', { useESM: true }] },
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^(\\.\\.?\\/.+)\\.js$': '$1',
  },
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: 'src/tests/coverage',
  verbose: true,
};

module.exports = jestConfig;
