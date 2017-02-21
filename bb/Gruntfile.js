
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
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['handlebars', 'sass']);
};
