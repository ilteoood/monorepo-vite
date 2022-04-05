const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  webpack: {
    alias: {},
    plugins: {
      add: [new MonacoWebpackPlugin()]
    }
  }
}
