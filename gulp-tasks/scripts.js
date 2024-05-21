module.exports = function(gulp, plugins, browserSync, config) {
  const source = require('vinyl-source-stream');
  const buffer = require('vinyl-buffer');
  const rollupStream = require('@rollup/stream');
  const { nodeResolve } = require('@rollup/plugin-node-resolve');

  gulp.task('js:rollup', function(done) {
    rollupStream({
      input: config.app.js,
      output: { format: 'iife' },
      plugins: [nodeResolve()]
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins.concat('bundle.js'))
    .pipe(plugins.babel({presets: ['@babel/env']}))
    .pipe(plugins.hashFilename({"format": "{name}.{hash}.min{ext}"}))
    .pipe(gulp.dest(config.dist.js))
    .on('end', function() {
      done();
    })
    .pipe(browserSync.reload({ stream: true }))
  });

  gulp.task('js:build', gulp.parallel('js:rollup'), function(done) {
    done();
  });
}
