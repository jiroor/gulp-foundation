import gulp from 'gulp'
import sass from 'gulp-sass'
import config from './config'

gulp.task('css', () => {
  return gulp.src(config.path.css.src)
    .pipe(sass())
    .pipe(gulp.dest(config.path.css.dst))
})
