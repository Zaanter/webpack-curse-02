const path = require('path')
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT

module.exports = {
    name: 'express-server',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    externals:[ nodeExternals() ],
    mode: NODE_ENV,
    target:'node',
    resolve:{
        extensions: ['.ts','.js']
    },
    module:{
        rules:[
            {
                test: /\.(js)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
}