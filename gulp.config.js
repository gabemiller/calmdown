/**
 * Created by Gabor Molnar
 * 2016. 10. 26..
 */

var gulpConfig = {
    /**
     * File paths
     */
    path : {
        scss : {
            src : './src/scss/calmdown.scss',
            dest: './dist/css'
        },
        googleFonts : {
            src : './src/fonts/fonts.list',
            dest: './dist',
            rm  : './dist/fonts'
        },
        eslint : {
            src : './src/js/**/*.js'
        },
        webpack : {
            src   : './src/js/Calmdown.js',
            dest   : './dist/scripts'
        },
        pug : {
            src : './src/views/*.pug',
            dest: './dist'
        },
        ghPages : {
            src : './dist/**/*'
        },
        webserver : {
            root: 'dist'
        },
        watch : {
            webpack: 'src/js/*.js',
            pug    : 'src/views/**/*.pug',
            scss   : 'src/scss/**/*.scss',
        }
    },
    /**
     * Output filenames
     */
    fileName : {
        scssDev : {
            prefix: '',
            basename : 'calmdown',
            suffix: ''
        },
	    scssProd : {
		    prefix: '',
		    basename : 'calmdown',
		    suffix: '.min'
	    }
    },
    /**
     * Google fonts
     *
     * FontsDir and cssDir are relative to gulp.dest path.
     */
    googleFontsConfig : {
        fontsDir: './fonts',
        cssDir: '../src/scss/base',
        cssFilename: '_fonts.scss'
    }
};

module.exports = gulpConfig;