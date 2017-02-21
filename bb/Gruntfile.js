
module.exports = function (grunt) {
  grunt.initConfig({
    // Do grunt-related things in here
    pkg: grunt.file.readJSON('package.json'),
    // Handlebars compilation task
    handlebars: {
      compile: {
        files: [
          {
            expand: true,
            cwd: 'templates',
            src: ['*.hbs'],
            dest: 'templates',
            ext: '.js',
            extDot: 'first'
          }
        ]
      },
      options: {
        namespace: false,
        amd: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-handlebars');
};