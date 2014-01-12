module.exports = function (grunt) {

  grunt.initConfig({

    uglify: {
      dist: {
        files: {
          'dist/click-target.min.js': ['src/click-target.js']
        }
      }
    },

    copy: {
      dist: {
        files: {
          'dist/click-target.js': ['src/click-target.js']
        }
      }
    }

  });

  grunt.registerTask('dist', ['uglify:dist', 'copy:dist']);

  require('load-grunt-tasks')(grunt);

};
