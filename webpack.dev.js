const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "none",
    output: {
        // filename: "main.[contentHash].js",
        // filename: "main.js",
        // Go to chrome devtool > Elements tag > you will see main.bundle.js and vendor.bundle.js are generated
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            // In Dev mode, we want the style to auto injected as <style> into the <head> in index.html
            // (You can see this under Chrome devtool -> Elements)
            // That is why we use style-loader.
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader',   // 2. Turns css into commonjs
                    'sass-loader'   // 1. Turns sass into css
                ]
            },
        ]
    }
});
