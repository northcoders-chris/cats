module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    eslint: {
      target: ['*.js']
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['spec/**/*.js']
      }
    },
    watch: {
      files: ['*.js'],
      tasks: ['eslint', 'mochaTest']
    }
  });
  grunt.registerTask('default', ['eslint', 'mochaTest']);
};
