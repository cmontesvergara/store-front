module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue/dist/' : '/',




  devServer: {
    compress: true,
    disableHostCheck: true,
    port: 8002, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },

}
