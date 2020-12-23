const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shell',
            filename: 'remoteEntry.js',
            remotes: {
                reactNavApp: 'reactNavApp@http://localhost:8081/remoteEntry.js',
                reactApp: 'reactApp@http://localhost:8082/remoteEntry.js',
                angularApp: 'angularApp@http://localhost:8083/remoteEntry.js'
            },
            shared: [
                {
                    ...deps,
                },
            ],
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
