const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// This is installed as part of webpack: This is the default minimiser for Javascript
const TerserPlugin = require("terser-webpack-plugin");


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
    },
    // The below syntax is not from the library official documentation of
    // https://github.com/NMFR/optimize-css-assets-webpack-plugin
    // If you ONLY have had OptimizeCssAssetsPlugin in minimizer, it will minimize css but it will override the default minimizer for js files.
    // So add back the minimizer for js, which is terser-webpack-plugin
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            // In Prod mode, we want extract css into its own files and auto injected as <link> into the <head> in index.html
            // (You can see this under index.html -> <head>)
            // That is why we use MiniCssExtractPlugin.loader.
            // Because if we loaded it as part of the JS (at the end of the html file), the page may have a few milli-seconds without styling and looks bad.
            // Keep it in a separate CSS file always make sure it is loaded first before the html body.
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extra css into files
                    'css-loader',   // 2. Turns css into commonjs
                    'sass-loader'   // 1. Turns sass into css
                ]
            },
        ]
    }
});
