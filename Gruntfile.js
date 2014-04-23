/* jshint node:true */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        repo: '<%= pkg.repository.type[0].toUpperCase() + pkg.repository.type.slice(1,3) %>',
        banner: '/*!\n' +
                ' <%= pkg.name %> v<%= pkg.version %>\n' +
                ' Author: <%= pkg.author.name %> - <%= pkg.author.url %>\n' +
                ' <%= repo %>: <%= pkg.repository.url %>\n' +
                '\n' +
                ' Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
                ' Licensed under the <%= pkg.license.name %> license\n' +
                ' http://www.opensource.org/licenses/mit-license.php\n' +
                '\n' +
                ' Twitter: <%= pkg.author.twitter %>\n' +
                ' */\n\n',

        concat: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: 'src/jquery.scrollUp.js',
                dest: 'js/jquery.scrollUp.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            'js/jquery.scrollUp.min.js': ['js/jquery.scrollUp.js']
        },

        jshint: {
            all: ['Gruntfile.js', 'src/jquery.scrollUp.js'],
            options: {
                'browser': true,
                'curly': true,
                'eqeqeq': true,
                'immed': true,
                'indent': 4,
                'jquery': true,
                'noarg': true,
                'quotmark': 'single',
                'strict': true,
                'undef': true,
                'unused': true,
                'globals': {
                    'scrollEvent': true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('test', 'default');
};
