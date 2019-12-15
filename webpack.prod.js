const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    plugins: [new CleanWebpackPlugin()],
    output: {
        // filename: "main.js",
        // filename: "main.[contentHash].js",
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});
