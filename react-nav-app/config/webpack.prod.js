const { merge } = require('webpack-merge');
const path = require('path');
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
            name: 'reactNavApp',
            filename: 'remoteEntry.js',
            exposes: {
                './NavBar': './src/NavBar',
            },
            shared: [
                {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: deps['react-dom'],
                    },
                },
            ],
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);
