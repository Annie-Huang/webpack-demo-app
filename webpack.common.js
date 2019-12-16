
module.exports = {
    // entry: "./src/index.js",
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            // // {
            // //     test: /\.css$/i,
            // //     use: ['style-loader', 'css-loader']
            // // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         'style-loader', // 3. Inject styles into DOM
            //         'css-loader',   // 2. Turns css into commonjs
            //         'sass-loader'   // 1. Turns sass into css
            //     ]
            // },


            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: 'html-loader'
            //     }
            // }
            // This is the same as above.
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },


            // {
            //     test: /\.(svg|png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         },
            //     ],
            // },
            // {
            //     test: /\.(svg|png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         outputPath: 'images',
            //     },
            // },
            // This is the same as above.
            // I think for webpack, [] and {} under use is interchangeable . very strange.
            // Have to add esModule: false because since file-loader ^5.0.2,
            // By default, file-loader generates JS modules that use the ES modules syntax.
            // There are some cases in which using ES modules is beneficial, like in the case of module concatenation and tree shaking.
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                        esModule: false
                    },
                },
            }

        ],
    },
};
