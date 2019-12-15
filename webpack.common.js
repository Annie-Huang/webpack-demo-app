const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader',   // 2. Turns css into commonjs
                    'sass-loader'   // 1. Turns sass into css
                ],
            },
        ],
    },
};
