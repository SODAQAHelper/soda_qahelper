const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

const paths = {
    styles: {
        src: 'static_src/scss/*.scss',
        dest: 'static/css'
    },
    scripts: {
        src: 'static_src/js/*.js',
        dest: 'static/js'
    },
};

/*
 * Define our tasks using plain functions
 */
async function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}

async function scripts() {
    return gulp.src(paths.scripts.src, {sourcemaps: true})
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.styles = styles;
exports.scripts = scripts;

exports.default = async function () {
    gulp.series(scripts, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
};
