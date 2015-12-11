var gulp = require('gulp');
var destination = "/tmp/";

gulp.task('copy', function (event) {
    console.log("copying");
    return gulp.src('src/*.js')
            .pipe(gulp.dest(destination));
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['copy']);
});

gulp.task('default', ['watch']);