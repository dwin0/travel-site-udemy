const gulp = require('gulp');
const postCss = require('gulp-postcss');
const autoPrefixer = require('autoprefixer');
const cssVars = require('postcss-simple-vars');
const cssNested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postCss([cssImport, mixins, cssVars, cssNested, autoPrefixer]))
             .on('error', function(errorInfo) {
               console.error(errorInfo.toString());
               this.emit('end');
             })
             .pipe(gulp.dest('./app/temp/styles'));
});
