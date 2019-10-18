const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: glob.sync('./src/**/*.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'src/environment/*.json', to: 'environment/', flatten: true }])
    ],
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.ts', '.js', '.json'],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx'
            // extension will be handled by 'ts-loader'
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: false
    }
} 