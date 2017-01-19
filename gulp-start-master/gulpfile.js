var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
    cleanCSS = require('gulp-clean-css');
    imagemin = require('gulp-imagemin');
    cmq = require('gulp-combine-media-queries');



    gulp.task('inline', function() {
        return gulp.src('source/index.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/css'));
    });
    gulp.task("imgmin1", () =>
        gulp.src('source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
    );
    gulp.task('imgmin2', () =>
        gulp.src('source/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
    );


gulp.task('default',['inline', "imgmin1", "imgmin2"]);
