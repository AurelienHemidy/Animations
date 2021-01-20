const path = require('path');

module.exports =  {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js', //Le fichier qui va être bundle
        path: path.resolve(__dirname, 'public') //La ou il va être bundle (path nous permet de récupérer d'ou vient le fichier webpack.config.ts car il nous faut un chemoin absolu)
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
} 