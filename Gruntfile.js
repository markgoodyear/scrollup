module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
          banner: '/*\n' +
            '\n' +
            ' <%= pkg.name %> v<%= pkg.version %>\n' +
            ' Author: <%= pkg.authors[0].name %> - <%= pkg.authors[0].url %>\n' +
            ' <%= pkg.repositories[0].type %>: <%= pkg.repositories[0].url %>\n' +
            '\n' +
            ' Copyright <%= pkg.year %> <%= pkg.authors[0].name %>.\n' +
            ' Licensed under the <%= pkg.licenses[0].name %> license\n' +
            ' http://www.opensource.org/licenses/mit-license.php\n' +
            '\n' +
            ' Twitter: <%= pkg.authors[0].twitter %>\n' +
            '\n' +
            ' */\n'
        },
        concat: {
          dist: {
            src: ["src/jquery.scrollUp.js"],
            dest: "js/jquery.scrollUp.js"
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
            'js/jquery.scrollUp.min.js': ['js/jquery.scrollUp.js']
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
              "unused": true,
              "globals": {
                  "jQuery": true,
                  "window": true,
                  "document": true,
                  "scrollEvent": true,
                  "scrollDis": true
              }
            }
        },
        clean: ['js/jquery.scrollUp.min.js', 'js/jquery.scrollUp.js']
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify']);
};
