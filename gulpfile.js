/**
 * Created by Gabor Molnar
 * 2016.01.23.
 */


/**
 * Gulp Plugins
 *
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var prettify = require('gulp-prettify');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var webpack = require("webpack-stream");
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');
var named = require('vinyl-named');
var eslint = require('gulp-eslint');

/**
 *  Gulp config
 */

var path = require('./gulp.config').path;
var fileName = require('./gulp.config').fileName;
var webpackConfig = require('./webpack.config.js');

/**
 * Gulp Task
 *
 * Compile app.scss to app.css
 */
gulp.task('scss', function() {
    return gulp.src(path.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(['last 2 version', 'ie 10']))
        .pipe(cleanCss())
        .pipe(rename(fileName.scss))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.scss.dest))
        .pipe(connect.reload());
});

gulp.task('eslint', function(){
    return gulp.src(path.eslint.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


/**
 * Gulp Task
 *
 * Generate app.js
 */
gulp.task('webpack',['eslint'], function () {
    return gulp.src(path.webpack.src)
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(path.webpack.dest));
});


/**
 * Gulp Task
 *
 * Compile pug to html
 */
gulp.task('pug', function () {
    gulp.src([path.pug.src])
        .pipe(pug({
            pretty: false
        }))
        .pipe(prettify({
            unformatted: ['pre', 'code'],
            indent_inner_html: true,
            indegulnt_size: 2,
            brace_style: 'expand'
        }))
        .pipe(gulp.dest(path.pug.dest))
        .pipe(connect.reload());
});

/**
 * Gulp Server
 *
 * Start a server for testing your app.
 */
gulp.task('webserver', function() {
    connect.server({
        root: path.webserver.root,
        livereload: true,
        port: 8001
    });
});

/**
 *  Gulp watch
 *
 *  Watch all gulp tasks.
 */
gulp.task('watch', function () {
    gulp.watch(path.watch.webpack, ['webpack']);
    gulp.watch(path.watch.pug, ['pug']);
    gulp.watch(path.watch.scss, ['scss']);
});

/**
 * Gulp Init
 *
 * Initialize all tasks and watchers.
 */
gulp.task('init', ['pug', 'scss', 'webpack','watch', 'webserver']);
