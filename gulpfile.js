'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglifyjs'),
    bootstrap = 'node_modules/bootstrap/scss/';

gulp.task('sass', function (done) {
  gulp.src('./scss/RENAME.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
        includePaths: [ bootstrap ],
        errLogToConsole: true,
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(autoprefixer('last 2 versions', 'ie 9'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  done();
});

gulp.task('uglify', function(done) {
  gulp.src([ './js/*.js' ])
      .pipe(sourcemaps.init())
      .pipe(uglify('RENAME.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  done();
});

gulp.task('watch', gulp.series('sass', 'uglify', function(done){
  livereload.listen();
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./js/*.js', gulp.series('uglify'));
  gulp.watch(['./dist/*', './**/*.twig'], function (files){
    livereload.changed(files)
  });

  done();
}));

gulp.task('default', gulp.series('sass', 'uglify', function(done){
  done();
}));
