module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()

      .use('markdown-loader')
      .loader('./build/markdown-loader')
      .end()
  }
}
