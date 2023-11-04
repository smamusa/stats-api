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
};

module.exports = jestConfig;
