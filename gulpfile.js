/**
 * Created by Gabor Molnar
 * 2016.01.23.
 */


/**
 * Gulp Plugins
 *
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const prettify = require('gulp-prettify');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const webpack = require("webpack-stream");
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const named = require('vinyl-named');
const eslint = require('gulp-eslint');
const ghPages = require('gulp-gh-pages');
const gulpif = require('gulp-if');

/**
 *  Gulp config
 */

const path = require('./gulp.config').path;
const fileName = require('./gulp.config').fileName;
const webpackConfigDev = require('./webpack.config.dev.js');
const webpackConfigProd = require('./webpack.config.prod.js');
const isProd = process.env.NODE_ENV === 'production';

/**
 * Gulp Task
 *
 * Compile app.scss to app.css
 */
gulp.task('scss', function() {
    return gulp.src(path.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(isProd,sourcemaps.init()))
        .pipe(autoprefixer(['last 2 version', 'ie 10']))
        .pipe(gulpif(isProd,cleanCss()))
        .pipe(gulpif(isProd,rename(fileName.scssProd),rename(fileName.scssDev)))
        .pipe(gulpif(isProd,sourcemaps.write('.')))
        .pipe(gulp.dest(path.scss.dest))
        .pipe(connect.reload());
});

/**
 * Gulp task
 *
 * Lint the es files
 */
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
        .pipe(gulpif(isProd,webpack(webpackConfigProd),webpack(webpackConfigDev)))
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
 * Gulp Task
 *
 * Deploy to github pages
 */

gulp.task('deploy', function() {
	return gulp.src(path.ghPages.src)
		.pipe(ghPages());
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

gulp.task('build', ['pug', 'scss', 'webpack']);
