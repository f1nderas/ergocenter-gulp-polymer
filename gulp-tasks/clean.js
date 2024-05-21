module.exports = function(gulp, plugins, config) {
  var del = require('del');
  gulp.task('clean:dist', function(done) {
      del.sync(config.dist.index);
      del.sync(config.dist.css);
      del.sync(config.dist.js);
      del.sync(config.dist.images);
      del.sync(config.dist.plugins);
      del.sync(config.dist.fonts);
      done();
  });

  gulp.task('clean:css', function(done) {
      del.sync(config.dist.css);
      done();
  });

  gulp.task('clean:js', function(done) {
      del.sync(config.dist.js);
      done();
  });
}
