const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "none",
    output: {
        filename: "main.js",
        // filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    }
};
