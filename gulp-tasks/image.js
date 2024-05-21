module.exports = function(gulp, plugins, config) {
  var jpegrecompress = require('imagemin-jpeg-recompress'), // плагин для сжатия jpeg
    pngquant = require('imagemin-pngquant'); // плагин для сжатия png

  gulp.task('image:build', function(done) {
      gulp.src(config.app.img)
          .pipe(plugins.imagemin([
              plugins.imagemin.gifsicle({ interlaced: true }),
              jpegrecompress({
                  progressive: true,
                  max: 90,
                  min: 80
              }),
              pngquant(),
              plugins.imagemin.svgo({ plugins: [{ removeViewBox: false }] })
          ]))
          .pipe(gulp.dest(config.dist.img));
      done();
  });
}
