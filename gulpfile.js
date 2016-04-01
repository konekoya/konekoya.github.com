var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var cssnano = require('cssnano');
var runSequence = require('run-sequence');

// Pathes
var src = './src/';
var config = {
  build: './build/',
  scss: src + 'scss/styles.scss',
  js: src + 'js/scripts.js'
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
    .pipe(gulp.dest(config.build + 'css'));
});

gulp.task('scripts', function() {
  console.log('Analyzing source with JSHint and JSCS');
  return gulp
    .src(config.js)
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.uglify())
    .pipe($.concat('scripts.js'))
    .pipe(gulp.dest(config.build + 'js'));
});

gulp.task('watch', function() {
  gulp.watch(config.js, ['scripts']);
  gulp.watch(config.scss, ['styles']);
});

gulp.task('default', function() {
  runSequence('styles', 'scripts', 'watch');
});
