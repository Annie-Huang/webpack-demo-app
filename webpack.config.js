const path = require('path');

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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
