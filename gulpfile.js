var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var header = require('gulp-header');
var rename = require('gulp-rename');
var del = require('del');
var pkg = require('./package.json');

// Banner
var banner = ['/*!',
    ' * <%= pkg.name %> v<%= pkg.version %>',
    ' * Url: <%= pkg.homepage %>',
    ' * Copyright (c) <%= pkg.author.name %> — <%= pkg.author.twitter %> — <%= pkg.author.url %>',
    ' * License: <%= pkg.license.name %>',
    ' */',
    ''].join('\n');


// Clean
gulp.task('clean', function(cb) {
  del(['dist/*.js'], cb);
});

// Default task
gulp.task('default', function() {
  return gulp.src('src/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({ preserveComments: 'some' }))
    .pipe(gulp.dest('dist'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch(config.src, ['default']);
});
