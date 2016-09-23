module.exports = function(wallaby) {
  return {
    files: [
      // { pattern: 'src/lib/jquery.js', 'instrument': false },
      // { pattern: 'node_modules/chai/chai.js', 'instrument': false },
      // { pattern: 'node_modules/sinon/pkg/sinon.js', 'instrument': false },
      // { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false },
      // { pattern: 'test/lib/*.js', 'instrument': true },
      'src/**/*.ts'
    ],
    tests: [
      'test/*test.ts'
    ],
    setup: function() {
      global.expect = require('chai').expect;
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha'
  }
}
