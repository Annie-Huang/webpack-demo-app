const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "none",
    output: {
        filename: "main.js",
        // filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    }
});
