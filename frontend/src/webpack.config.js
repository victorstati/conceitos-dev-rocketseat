const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),  // primeiro arquivo que vai ser carregado pelo app
    output: { // qual arquivo vai ser gerado depois de convertido
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use:{
                    loader: 'file-loader'
                }
            }
        ]
    },
};