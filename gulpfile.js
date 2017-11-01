const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const cssnested = require('postcss-nested');

gulp.task('default', function() {
  console.log('asdf');
});

gulp.task('html', function() {
  console.log('html');
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postcss([cssvars, cssnested, autoprefixer]))
             .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
