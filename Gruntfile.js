module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false,
                banner: '/*\n'+
                        '\n'+
                        ' <%= pkg.name %> <%= pkg.version %>\n'+
                        ' Author: <%= pkg.author %> - <%= pkg.authorUrl %>\n'+
                        ' Git: <%= pkg.repository.url %>\n'+
                        '\n'+
                        ' <%= pkg.copyright %>\n'+
                        ' Licensed under the <%= pkg.license %> license\n'+
                        ' http://www.opensource.org/licenses/mit-license.php\n' +
                        '\n'+
                        ' Twitter: <%= pkg.authortwitter %>\n'+
                        '\n'+
                        ' */\n'
            },
            'js/jquery.scrollUp.min.js': ['js/jquery.scrollUp.js']
        },
        plato: {
            options: {
                jshintrc: '.jshintrc'
            },
            'report': ['js/jquery.scrollUp.js']
        },
        clean: ['js/jquery.scrollUp.min.js','report/']
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-plato');
    grunt.registerTask('default', [ 'clean', 'analysis', 'package']);
    grunt.registerTask('analysis', [ 'plato' ]);
    grunt.registerTask('package', [ 'uglify' ]);
};