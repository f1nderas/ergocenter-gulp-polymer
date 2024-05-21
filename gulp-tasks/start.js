module.exports = function(gulp) {
  gulp.task('start', gulp.series('build', 'browserSync', 'watch'));
}
