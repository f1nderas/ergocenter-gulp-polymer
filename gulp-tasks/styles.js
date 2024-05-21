module.exports = function(gulp, plugins, browserSync, config) {
  gulp.task('scss:build', function(done) {
      gulp.src(config.app.scss)
          .pipe(plugins.plumber())
          .pipe(plugins.concat('bundle.css'))
          .pipe(plugins.sass({
              outputStyle: 'compact'
          }).on('error', plugins.sass.logError))
          .pipe(plugins.autoprefixer())
          .pipe(plugins.cleanCss({
              level: 2
          }))
          .pipe(plugins.hashFilename({"format": "{name}.{hash}.min{ext}"}))
          .pipe(gulp.dest(config.dist.css))
          .on('end', function() {
            done();
          })
          .pipe(browserSync.reload({ stream: true }));
  });
}
