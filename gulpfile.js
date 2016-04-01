var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var cssnano = require('cssnano');
var mainBowerFiles = require('main-bower-files');

