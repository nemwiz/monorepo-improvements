const webpackCommon = require('./webpack.common.config.js');
const path = require('path');

module.exports = {
    ...webpackCommon,
    mode: 'production',
    resolve: {
        ...webpackCommon.resolve,
        alias: {
            '@mono/http-client': path.resolve(__dirname, '../http-client/src/index.ts'),
            '@mono/domain': path.resolve(__dirname, '../domain/src/index.ts')
        }
    },
}
