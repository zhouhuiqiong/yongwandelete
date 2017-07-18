var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
gulp.task('scss', function(){
  return gulp.src('a.scss')
    .pipe(plumber())
    .pipe(sass().on('error', notify))
    .pipe(gulp.dest('./'))
});
gulp.task('watch', function(){
  gulp.watch('./*.scss', ['run']); 
})
function notify(err) {
  this.emit('end');
}

gulp.task('run', function(){
     gulp.run('scss','watch');
});
