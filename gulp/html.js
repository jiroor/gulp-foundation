import gulp from 'gulp'
import browser from 'browser-sync'
import watch from 'gulp-watch'
import config from './config'

function execHtml() {
  return gulp.src(config.path.html.src)
    .pipe(gulp.dest(config.path.html.dst))
}

gulp.task('html', () => {
  return execHtml()
})

gulp.task('htmlWatch', () => {
  watch(config.path.html.src, () => {
    execHtml().on('end', browser.reload)
  })
})
