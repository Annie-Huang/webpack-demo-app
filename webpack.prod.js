const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].[contentHash].css'
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        // filename: "main.js",
        // filename: "main.[contentHash].js",
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});
