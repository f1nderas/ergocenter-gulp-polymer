module.exports = function(gulp, config) {
  gulp.task('build', gulp.series('clean:dist', 'scss:build', 'js:build',
                                       'copy:all', 'html:build'));
}
