var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
  gulp.src('./sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
