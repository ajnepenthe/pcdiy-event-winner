var gulp = require('gulp'),
    compass = require('gulp-compass');

gulp.task('compass', function () {
    return gulp.src('./style/sass/*.sass')
        .pipe(compass({
            config_file: './style/sass/config.rb',
            sourcemap: true,
            time: true,
            css: './style/css/',
            sass: './style/sass/',
            style: 'compact' //nested, expanded, compact, compressed
        }))
        .pipe(gulp.dest('./style/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./style//sass/*.sass', ['compass']);
});

gulp.task('default', ['compass', 'watch']);