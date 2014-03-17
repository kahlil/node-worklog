module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Load tasks from grunt folder.
  grunt.loadTasks('grunt');
  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
