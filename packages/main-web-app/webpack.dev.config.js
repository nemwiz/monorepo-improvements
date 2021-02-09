const webpackCommon = require('./webpack.common.config.js');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    ...webpackCommon,
    mode: 'development',
    resolve: {
        ...webpackCommon.resolve,
        plugins: [
            new TsconfigPathsPlugin()
        ]
    },
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
    }
}
