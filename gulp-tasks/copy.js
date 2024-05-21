const fs = require("fs");
const symlink = require('gulp-symlink');

module.exports = function(gulp, plugins, config) {

  gulp.task('copy:plugins', function(done) {
    gulp.src(config.app.plugins)
        .pipe(gulp.dest(config.dist.plugins));
    done();
  });

  gulp.task('copy:images', function(done) {
    gulp.src(config.app.images)
        .pipe(gulp.dest(config.dist.images));
    done();
  });

  gulp.task('copy:fonts', function(done) {
    gulp.src(config.app.fonts)
        .pipe(gulp.dest(config.dist.fonts));
    done();
  });

  gulp.task('copy:version', function(done) {
    gulp.src(config.version)
        .pipe(plugins.rename("version"))
        .pipe(gulp.dest(config.dist.core))
    done();
  });

  gulp.task('copy:all', gulp.parallel('copy:plugins', 'copy:images',
    'copy:fonts', 'copy:version', function(done) {
      done();
  }));
}
