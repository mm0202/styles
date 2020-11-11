const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

const paths = {
    'scss': 'src/',
    'css': 'docs/'
};

gulp.task('scss', function () {
    return gulp.src(paths.scss + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.css))
});

gulp.task('watch', function () {
    gulp.watch(paths.scss + '**/*.scss', gulp.series('scss'));
});

gulp.task('default', gulp.parallel('watch'));