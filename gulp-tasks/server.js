module.exports = function(gulp, browserSync, config) {
  gulp.task('browserSync', function(done) {
      browserSync.init(config.server);
      done();
  });
}
