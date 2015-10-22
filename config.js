export default {
  // アプリケーションのルートディレクトリ
  root: 'public',
  port: 2000,

  // パス設定
  path: {
    // HTML
    html: {
      src: 'src/view/**/*.html',
      dst: 'public'
    },

    // JavaScript
    script: {
      // 外部ファイルまとめ
      lib: 'src/js/lib.js',
      // 内部ファイルまとめ
      app: 'src/js/app.js',

      src: 'src/js/**/*.js',
      dst: 'public/js'
    },

    // CSS
    css: {
      src: 'src/sass/!(_*).sass',
      dst: 'public/css'
    },

    // 複製
    symlink: [{
      // image
      from: 'src/img',
      to: 'public/img'
    }, {
      // mock data
      from: 'src/mock',
      to: 'public/mock'
    }]
  }
};
