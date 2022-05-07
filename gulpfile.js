const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

const paths = {
    'scss': 'src/',
    'css': 'docs/'
};

gulp.task('scss', function (done) {
    return gulp.src(paths.scss + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.css))
        done();
});

gulp.task('watch', function (done) {
    gulp.watch(paths.scss + '**/*.scss', gulp.series('scss'));
    done();
});

gulp.task('default', gulp.parallel('watch'));