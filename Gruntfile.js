module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
          banner: '/*!\n' +
                  ' * <%= pkg.name %> v<%= pkg.version %>\n' +
                  ' * Author: <%= pkg.authors[0].name %> - <%= pkg.authors[0].url %> — <%= pkg.authors[0].twitter %>\n' +
                  ' * <%= pkg.repositories[0].type %>: <%= pkg.repositories[0].url %>\n' +
                  ' * Copyright <%= pkg.year %>, <%= pkg.licenses[0].name %>\n' +
                  ' */\n'
        },
        concat: {
          dist: {
            src: ["src/jquery.scrollUp.js"],
            dest: "dist/jquery.scrollUp.js"
          },
          options: {
            banner: "<%= meta.banner %>"
          }
        },
        uglify: {
            options: {
              // mangle: false,
              banner: "<%= meta.banner %>"
            },
            'dist/jquery.scrollUp.min.js': ['dist/jquery.scrollUp.js']
        },
        jshint: {
            all: [ 'src/jquery.scrollUp.js' ],
            options: {
              "boss": true,
              "curly": true,
              "eqeqeq": true,
              "eqnull": true,
              "expr": true,
              "immed": true,
              "noarg": true,
              "onevar": false,
              "quotmark": "single",
              "smarttabs": true,
              "trailing": true,
              "undef": true,
              "unused": false,
              "globals": {
                  "jQuery": true,
                  "window": true,
                  "document": true,
                  "Plugin": true
              }
            }
        },
        clean: ['dist/jquery.scrollUp.min.js', 'dist/jquery.scrollUp.js']
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify']);
};
