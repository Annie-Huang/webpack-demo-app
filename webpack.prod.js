const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "production",
    output: {
        // filename: "main.js",
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    }
};
