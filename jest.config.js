module.exports = {
  clearMocks: true,
  setupTestFrameworkScriptFile: '<rootDir>setupTests.js',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  testURL: 'http://localhost',
  transform: { '^.+\\.jsx?$': 'babel-jest' }
};
