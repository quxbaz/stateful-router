const path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'test/',
  collectCoverageFrom: ['src/'],
  coverageDirectory: path.resolve(process.cwd(), 'coverage'),
}
