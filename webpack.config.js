module.exports = {
  entry: {
    bundle1: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:3000','./main1.js'],
    bundle2: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:3000','./main2.js'],
    "build/test":['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:3000','./app/test.js']
  },
  //entry: {
  //  bundle1: ['./main1.js'],
  //  bundle2: ['./main2.js'],
  //  "build/test":['./app/test.js']
  //},
  output: {
    filename: '[name].js'
  },
  plugins:[],
  devServer: {
    hot: true,
    inline: true,
    proxy: {
      '/crm-api': {
        target: 'https://test.keyil.cn',
        changeOrigin: true
      }
    }
  }
};
