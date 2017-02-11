/* File: gulpfile.js */

const gulp         = require('gulp')
const gutil        = require('gulp-util')
const sass         = require('gulp-sass')
const browserSync  = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: '.',
        port: 3005
    });

    gulp.watch("./stylesheets/scss/*.scss", ['sass']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./stylesheets/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./stylesheets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);