const gulp = require('gulp'),
    livereload = require('gulp-livereload');
gulp.task('js', () => {
    return gulp.src(['./js/*.js'])
        .pipe(livereload());

})
gulp.task('style', () => {
    return gulp.src(['./css/*.css'])
        .pipe(livereload());

})
gulp.task('html', () => {
    return gulp.src(['./index.html'])
        .pipe(livereload());

})


gulp.task('watch', () => {
    livereload.listen();
    gulp.watch(['./js/**/*.js'], ['js']);
    gulp.watch(['./css/**/*.css'], ['style']);
    gulp.watch(['./index.html'], ['html']);
})