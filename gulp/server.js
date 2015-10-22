import gulp from 'gulp'
import browser from 'browser-sync'
import config from './config'

gulp.task('server', () => {
  let option = {
    server: {
      baseDir: config.root,
      port: config.port
    }
  }
  browser(option)
})

gulp.task('reload', () => {
  browser.reload()
})
