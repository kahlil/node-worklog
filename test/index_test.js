'use strict';

var grunt = require('grunt');
var path = require('path');
// var worklog = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/


var generatedFile;
var home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];

exports.worklog = {
  setUp: function(done) {
    // setup here
    done();
  },
  tearDown: function(done) {
    // Delete the generated file.
    grunt.file.delete(generatedFile, { force: true });
    done();
  },
  logwork: function(test) {
    var actual, expected;
    var dir = path.join(home, 'Dropbox', 'worklog');
    generatedFile = path.join(dir, 'test.txt');

    test.expect(1);

    grunt.util.spawn({
      cmd: 'worklog',
      args: [
        'test',
        '-m',
        'some work',
        '-t',
        '14:00:00'
      ]
    },
    function() {
      // Read the generated file.
      actual = grunt.file.read(generatedFile);
      // Read the reference file.
      expected = grunt.file.read('test/expected/test.txt');
      // Test if the two files have the same content.
      test.equal(actual, expected, 'should generate the correct file.');

      test.done();
    });
  },

  logworkGoogleDrive: function(test) {
    var actual, expected;
    var dir = path.join(home, 'Google Drive', 'worklog');
    generatedFile = path.join(dir, 'test.txt');

    test.expect(1);

    grunt.util.spawn({
      cmd: 'worklog',
      args: [
        'test',
        '-d',
        'Google Drive',
        '-m',
        'some work',
        '-t',
        '14:00:00'
      ]
    },
    function() {
      // Read the generated file.
      actual = grunt.file.read(generatedFile);
      // Read the reference file.
      expected = grunt.file.read('test/expected/test.txt');
      // Test if the two files have the same content.
      test.equal(actual, expected, 'should generate the correct file.');

      test.done();
    });
  }
};
