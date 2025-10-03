const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

const paths = {
    'scss': 'src/for-stylus/',
    'css': 'docs/for-stylus/'
};

function build() {
    return gulp.src(paths.scss + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.css))
}

function watch() {
    gulp.watch(paths.scss + '**/*.scss', build).on('change', function (path) {
        console.log(`File ${path} was changed, running tasks...`);
    });
}

exports.build = build;
exports.watch = watch;
exports.default = gulp.parallel(watch);