module.exports = function(gulp, config) {
  gulp.task('watch', function(done) {
    gulp.watch(config.watch.scss, gulp.series('clean:css', 'scss:build', 'html:build'));
    gulp.watch(config.watch.js, gulp.series('clean:js', 'js:build', 'html:build'));
    gulp.watch(config.watch.index, gulp.series('html:build'));
    // gulp.watch(config.watch.img, gulp.series('image:build'));
    done();
  });
}
