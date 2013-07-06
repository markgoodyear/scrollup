module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false,
                banner: '/*\n' +
                    '\n' +
                    ' <%= pkg.name %> <%= pkg.version %>\n' +
                    ' Author: <%= pkg.author %> - <%= pkg.authorUrl %>\n' +
                    ' Git: <%= pkg.repository.url %>\n' +
                    '\n' +
                    ' <%= pkg.copyright %>\n' +
                    ' Licensed under the <%= pkg.license %> license\n' +
                    ' http://www.opensource.org/licenses/mit-license.php\n' +
                    '\n' +
                    ' Twitter: <%= pkg.authortwitter %>\n' +
                    '\n' +
                    ' */\n'
            },
            'js/jquery.scrollUp.min.js': ['js/jquery.scrollUp.js']
        },
        qunit: {
            all: {
                options: {
                    urls: [ '1.9.1', '1.8.3', '1.7.2', '1.6.4', '1.5.2', '1.4.4'  ].map(function (version) {
                                return 'http://localhost:8000/test/test.html?jquery=' + version;
                            }).concat([ '1.9.1', '1.8.3', '1.7.2', '1.6.4', '1.5.2', '1.4.4'  ].map(function (version) {
                                return 'http://localhost:8000/test/test-min.html?jquery=' + version;
                            }))
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        },
        jshint: {
            all: [ 'js/jquery.scrollUp.js' ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        plato: {
            options: {
                jshintrc: '.jshintrc'
            },
            'report': ['js/jquery.scrollUp.js']
        },
        watch: {
            scripts: {
                files: [ 'test/*.js', 'test/*.html', 'js/*.js', 'Gruntfile.js' ],
                tasks: [ 'default' ]
            }
        },
        clean: ['js/jquery.scrollUp.min.js']
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-plato');

    grunt.registerTask('default', [ 'clean', 'analysis', 'package', 'test' ]);
    grunt.registerTask('analysis', [ 'jshint' ]);
    grunt.registerTask('report', [ 'plato' ]);
    grunt.registerTask('package', [ 'uglify' ]);
    grunt.registerTask('test', [ 'connect', 'qunit' ]);
};