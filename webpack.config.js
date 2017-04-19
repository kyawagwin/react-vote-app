const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./client/index.html",
    filename: "index.html",
    inject: "body"
});

const ReactBuildConfig = new webpack.DefinePlugin({
    'process.env': {
    NODE_ENV: JSON.stringify('production')
    }
});

const UglifyJsPluginsConfig = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resolve("dist"),
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/},
            { test: /\.(png|jpg)$/, loader: "file-loader?limit=25000" },
            { test:/\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        //ReactBuildConfig,
        //UglifyJsPluginsConfig,
        HtmlWebpackPluginConfig
    ]
}