module.exports = {
  moduleNameMapper: {
    '^helpers[/](.+)': '<rootDir>/src/helpers/$1',
    '^modules[/](.+)': '<rootDir>/src/modules/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/fixtures/'],
};
