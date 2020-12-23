const { merge } = require('webpack-merge');
var path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'shell',
            filename: 'remoteEntry.js',
            shared: [
                {
                    ...deps,
                },
            ],
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);
