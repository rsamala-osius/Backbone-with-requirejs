
module.exports = function (grunt) {
  grunt.initConfig({
    // Do grunt-related things in here
    pkg: grunt.file.readJSON('package.json'),
    // Handlebars compilation task
    handlebars: {
      compile: {
        files: {
          'templates/all-templates.js': 'templates/*.hbs'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-handlebars');
};