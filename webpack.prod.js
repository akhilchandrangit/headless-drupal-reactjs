const publicPath = ' ';
var path = require('path');
const webpack = require('webpack');

module.exports = {
 entry: '.src/app.js',
 output: {
    path: path.join(__dirname, ' '),
    filename: 'bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}