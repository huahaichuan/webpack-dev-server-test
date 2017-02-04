var gulp = require("gulp");
var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require("./webpack.config.js");
gulp.task('default',function(){
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer).listen(3000, 'localhost', function (err, result) {
        if (err) console.log(err);  console.log('Listening at localhost:3000');
    });
});




