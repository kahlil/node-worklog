module.exports = function(grunt) {
    'use strict';

    grunt.config('jshint', {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: ['Gruntfile.js', 'grunt/*.js']
      },
      lib: {
        src: ['*.js']
      },
      test: {
        src: ['test/*.js']
      }
    });
};
