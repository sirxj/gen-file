var gulp = require('gulp')
var plugins = require('gulp-load-plugins')()

gulp.task('minifyJs', () => {
  return gulp.src('./src/index.js')
  .pipe(plugins.uglify())
  .pipe(gulp.dest('./dist'))
})