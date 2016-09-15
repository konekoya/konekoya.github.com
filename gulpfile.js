var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });
var cssnano = require('cssnano');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

// Pathes
var src = './src/';
var config = {
  build: './build/',
  html: './index.html',
  scss: src + '/scss/**/*.scss',
  js: src + 'js/**/*.js',
  images: src + 'images/**/*'
};

gulp.task('styles', function() {
  log('Compiling SCSS --> CSS');
  return gulp
    .src(config.scss)
    .pipe($.sassGlob())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
    .pipe($.postcss([
      cssnano()
    ]))
    .pipe($.concat('styles.css'))
    .pipe(gulp.dest(config.build + 'css'))
    .pipe($.connect.reload());
});

gulp.task('scripts', function() {
  log('Analyzing source with JSHint');
  return gulp
    .src(config.js)
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.uglify())
    .pipe($.concat('scripts.js'))
    .pipe(gulp.dest(config.build + 'js'))
    .pipe($.connect.reload());
});

gulp.task('images', function() {
  log('Moving images source to build directory');
  return gulp
    .src(config.images)
    .pipe(gulp.dest(config.build + 'images'))
    .pipe($.connect.reload());
});


gulp.task('webserver', function() {
  log('Running webserver and livereload');
  $.connect.server({
    // the root parameter is needed
    root: __dirname,
    livereload: true,
    port: 3000
  });
});

gulp.task('watch', function() {
  log('Listening file changes');
  gulp.watch(config.html)
  gulp.watch(config.js, ['scripts']);
  gulp.watch(config.scss, ['styles']);
});

gulp.task('default', function() {
  runSequence('images', 'styles', 'scripts', 'watch', 'webserver');
});

// Todo, fix the log function
// helper functions
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.green(msg(item)));
      }
    }
  } else {
    $.util.log($.util.colors.green(msg));
  }
}
