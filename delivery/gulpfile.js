var gulp = require('gulp');
var webserver = require('gulp-server-livereload');

gulp.task('server', function() {
  gulp.src('./table')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8080,
      defaultFile: 'index.html'
    }));
});
