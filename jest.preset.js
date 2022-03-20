const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  coverageReporters: ['text'],
  collectCoverageFrom: ['<rootDir>/lib/**/*.{js,jsx,ts,tsx}'],
};