const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });
const runSequence = require('run-sequence');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const del = require('del');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

// Pathes
const src = './src/';
const build = './build/'
const config = {
  root: './',
  build: './build/',
  scss: `${src}/scss/**/*.scss`,
  js: `${src}js/**/*.js`,
  images: `${src}images/**/*`,
  buildCss: `${build}css/styles.css`,
  buildJs: `${build}js/scripts.js`
};

gulp.task('styles', () => {
  log('Compiling SCSS --> CSS');
  return gulp
    .src(config.scss)
    .pipe($.sassGlob())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
    .pipe($.concat('styles.css'))
    .pipe(gulp.dest(config.build + 'css'));
});

gulp.task('deploy-styles', ['clean-styles', 'styles'], () => {
  log('Uglifying styles for deploying');
  return gulp
    .src(config.buildCss)
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(gulp.dest(config.build + 'css'));
});

gulp.task('scripts', () => {
  log('Transpling ES6 --> ES5');
  return browserify({
    entries: src + 'js/app',
    extensions: ['.js'],
    debug: true
  })
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .on('error', err => {
      log('Browserify Error', err.message)
    })
    .pipe(source('scripts.js'))
    .pipe(gulp.dest(config.build + 'js'));
});

gulp.task('deploy-scripts', ['clean-scripts', 'scripts'], () => {
  return gulp
    .src(config.buildJs)
    .pipe($.uglify())
    .pipe(gulp.dest(`${config.build}js`));
})

gulp.task('lint', () => {
  log('linting all JavaScripts');
  return gulp
    .src([config.js, '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('images', () => {
  log('Moving images source to build directory');
  return gulp
    .src(config.images)
    .pipe(gulp.dest(config.build + 'images'));
});

gulp.task('webserver', () => {
  log('Running webserver and livereload');
  gulp.src(config.root)
    .pipe($.webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 3000
    }));
});

gulp.task('deploy-webserver', () => {
  log('Running webserver');
  gulp.src(config.root)
    .pipe($.webserver({
      livereload: false,
      directoryListing: false,
      open: true,
      port: 3001
    }));
});

gulp.task('watch', () => {
  log('Listening to file changes');
  gulp.watch(config.js, ['scripts']);
  gulp.watch(config.scss, ['styles']);
});

gulp.task('clean', function() {
  var delconfig = [].concat(config.build);
  log('Cleaning: ' + $.util.colors.green(delconfig));
  del(delconfig);
});

gulp.task('clean-scripts', function() {
  clean(config.build + 'js');
});

gulp.task('clean-styles', function() {
  clean(config.build + 'css');
});

gulp.task('clean-fonts', function() {
  clean(config.build + 'fonts');
});

gulp.task('clean-images', function() {
  clean(config.build + 'images');
});

gulp.task('default', ['lint'], () => {
  runSequence('images', 'styles', 'scripts', 'watch', 'webserver');
});


gulp.task('deploy', ['deploy-scripts', 'deploy-styles', 'deploy-webserver'], () => {
  log('Deploying task');
});

// helper functions
function clean(path) {
  log('Cleaning ' + $.util.colors.green(path));
  del.sync(path);
}

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
