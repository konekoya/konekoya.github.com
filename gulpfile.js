const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });
const cssnano = require('cssnano');
const runSequence = require('run-sequence');
const gutil = require('gulp-util');

// Pathes
const src = './src/';
const config = {
  build: './build/',
  dev: './dev/',
  html: './index.html',
  scss: src + '/scss/**/*.scss',
  js: src + 'js/**/*.js',
  images: src + 'images/**/*'
};

gulp.task('styles:dev', () => {
  log('Compiling SCSS --> CSS');
  return gulp
    .src(config.scss)
    .pipe($.sassGlob())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
    .pipe(gulp.dest(config.dev + 'css'))
    .pipe($.connect.reload());
});


gulp.task('styles', () => {
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
    .pipe(gulp.dest(config.dev + 'css'))
    .pipe($.connect.reload());
});

gulp.task('scripts:dev', () => {
  log('Analyzing source with JSHint');
  return gulp
    .src(config.js)
    .pipe($.plumber())
    .pipe($.babel({
        presets: ['es2015']
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.build + 'js'))
    .pipe($.connect.reload());
});

gulp.task('scripts', () => {
  log('Analyzing source with JSHint');
  return gulp
    .src(config.js)
    .pipe($.plumber())
    .pipe($.babel({
        presets: ['es2015']
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.uglify())
    .pipe($.concat('scripts.js'))
    .pipe(gulp.dest(config.dev + 'js'))
    .pipe($.connect.reload());
});

gulp.task('images:dev', () => {
  log('Moving images source to build directory');
  return gulp
    .src(config.images)
    .pipe(gulp.dest(config.dev + 'images'))
    .pipe($.connect.reload());
});

gulp.task('images', () => {
  log('Moving images source to build directory');
  return gulp
    .src(config.images)
    .pipe(gulp.dest(config.build + 'images'))
    .pipe($.connect.reload());
});

gulp.task('html:dev', () => {
  log('Moving HTML to build directory');
  return gulp
    .src(config.html)
    .pipe(gulp.dest(config.dev))
    .pipe($.connect.reload());
});

gulp.task('html', () => {
  log('Moving HTML to build directory');
  return gulp
    .src(config.html)
    .pipe(gulp.dest(config.build))
    .pipe($.connect.reload());
});

gulp.task('webserver', () => {
  log('Running webserver and livereload');
  $.connect.server({
    // the root parameter is needed
    root: ['dev'],
    livereload: true,
    port: 3000
  });
});

gulp.task('watch', () => {
  log('Listening file changes');
  gulp.watch(config.html)
  gulp.watch(config.js, ['scripts']);
  gulp.watch(config.scss, ['styles']);
  gulp.watch(config.html, ['html']);
});


gulp.task('dev', () => {
  runSequence('html:dev', 'images:dev', 'styles:dev', 'scripts:dev', 'watch', 'webserver');
});

gulp.task('default', () => {
  runSequence('html', 'images', 'styles', 'scripts', 'watch', 'webserver');
});

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
