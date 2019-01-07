var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    externals:{
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

module.exports = config;
