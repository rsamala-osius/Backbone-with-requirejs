
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
            dest: 'templates/build',
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
    },
    watch: {
      scripts: {
        files: ['templates/*.hbs'],
        tasks: ['handlebars'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['handlebars', 'sass']);
};
