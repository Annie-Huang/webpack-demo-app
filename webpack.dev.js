const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "none",
    output: {
        // filename: "main.[contentHash].js",
        // filename: "main.js",
        // Go to chrome devtool > Elements tag > you will see main.bundle.js and vendor.bundle.js are generated
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});
