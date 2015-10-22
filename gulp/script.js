import gulp from 'gulp'
import gulpIf from 'gulp-if'
import browserify from 'browserify'
import babel from 'gulp-babel'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import browser from 'browser-sync'
import watch from 'gulp-watch'
import config from './config'

// change job
let isEs6 = false;
let isUglify = false;
let exec = execBrowserify

function execBrowserify(entry) {
  var filename = entry.split('/').pop()
  var stream = browserify({
    entries: [entry]
  })

  if (isEs6) {
    stream = stream.transform(babelify)
  }

  return stream
    .bundle()
    .pipe(source(filename))
    .pipe(buffer())
    .pipe(gulpIf(isUglify, uglify()))
    .pipe(gulp.dest(config.path.script.dst))
}

function execConcat() {
  var filename = entry.split('/').pop()

  return gulp.src(config.path.script.src)
    .pipe(gulpId(isEs6, babel()))
    .pipe(concat(filename))
    .pipe(gulpIf(isUglify, uglify()))
    .pipe(gulp.dest(config.path.script.dst))
}

gulp.task('script', ['script:lib', 'script:app'])
gulp.task('script:lib', () => {
  return exec(config.path.script.lib)
})
gulp.task('script:app', () => {
  return exec(config.path.script.app)
})

gulp.task('scriptWatch', () => {
  watch(config.path.script.src, () => {
    exec(config.path.script.app).on('end', browser.reload)
  })
})
