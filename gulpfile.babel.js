import gulp from 'gulp'
import runSequence from 'run-sequence'

// 他タスクの読み込み
require('require-dir')('./gulp')

gulp.task('build', ['clean'], (cb) => {
  runSequence(['html', 'script', 'css', 'symlink'], cb)
})

gulp.task('local', (cb) => {
  runSequence('build', ['server', 'htmlWatch', 'scriptWatch'], cb)
})
