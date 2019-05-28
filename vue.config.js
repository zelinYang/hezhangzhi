module.exports = {
  baseUrl: '',
  devServer: {
    proxy: 'https://v2.yingmen.vip/'
  },
  configureWebpack: {
    externals: {
      "BMap": "BMap"
    }
  }
}

