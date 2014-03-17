module.exports = function(grunt) {
    'use strict';

    grunt.config('nodeunit', {
      files: ['test/*_test.js']
    });
};
