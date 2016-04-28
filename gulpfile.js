var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var cssnano = require('cssnano');
var runSequence = require('run-sequence');

// Pathes
var src = './src/';
var config = {
  build: './build/',
  scss: src + '/scss/**/*.scss',
  js: src + 'js/**/*.js'
};

gulp.task('styles', function() {
  console.log('Compiling SCSS --> CSS');
  return gulp
    .src(config.scss)
    .pipe($.sassGlob())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe($.postcss([
      cssnano()
    ]))
    .pipe($.concat('styles.css'))
    .pipe(gulp.dest(config.build + 'css'))
    .pipe($.connect.reload());
});

gulp.task('scripts', function() {
  console.log('Analyzing source with JSHint');
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


gulp.task('webserver', function() {
  console.log('Running webserver and livereload');
  $.connect.server({
    // the root parameter is needed
    root: __dirname,
    livereload: true
  });
});

gulp.task('watch', function() {
  console.log('listening file changes');
  gulp.watch(config.js, ['scripts']);
  gulp.watch(config.scss, ['styles']);
});

gulp.task('default', function() {
  runSequence('styles', 'scripts', 'watch', 'webserver');
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