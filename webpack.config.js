const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

const webpackConfig = {
    name: 'client',
    target: 'web',

    entry: {
        app: path.resolve('src/index.js')
    },

    devtool: "source-map", // For dev mode

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader"
            }],
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "resolve-url-loader"
            },{
                loader: "sass-loader"
            }]
        },
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: "file-loader"
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader'
        },
    ],
},

plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(env),
        },
    }),
    new ExtractTextPlugin('main.css'),
],

output: {
    filename: '[name].js',
    path: path.resolve('public/dist'),
    publicPath: '/static/',
},

resolve: {
    modules: [
        path.resolve('src'),
        'node_modules',
    ],
    extensions: ['.js', '.jsx'],
},
};

if (env === 'production') {
    webpackConfig.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
            },
        })
    )
}

module.exports = webpackConfig;
