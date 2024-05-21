const fs  = require("fs")
module.exports = function(gulp, plugins, browserSync, config) {
  gulp.task('html:build', function(done) {
      gulp.src(config.app.index)
          .pipe(plugins.plumber())
          .pipe(plugins.inject(gulp.src(config.inject.styles), {
            starttag: '<!-- inject:css -->'
          }))
          .pipe(plugins.inject(gulp.src(config.inject.scripts), {
            starttag: '<!-- inject:js -->'
          }))
          .pipe(plugins.replace('/dist/', './'))
          .pipe(gulp.dest(config.dist.html))
          .pipe(browserSync.reload({ stream: true }));
      done();
  });
}
