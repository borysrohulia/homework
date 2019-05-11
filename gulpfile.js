'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

const { src, dest, parallel } = require('gulp');

const minifyCSS = require('gulp-csso');
function css() {
  return src('**/*.css')
    .pipe(minifyCSS())
    .pipe(dest('build'))
}

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('build'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', gulp.series(['sass', 'css']));
});

exports.css = css;
exports.default = parallel(css);