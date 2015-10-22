import gulp from 'gulp'
import merge from 'merge-stream'
import symlink from 'gulp-symlink'
import config from './config'

gulp.task('symlink', () => {
  let files = config.path.symlink
  let stream = merge()

  files.forEach((file) => {
    stream.add(
      gulp.src(file.from)
        .pipe(symlink(file.to))
    )
  })

  return stream
})
