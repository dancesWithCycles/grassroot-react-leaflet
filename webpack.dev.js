const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        inline: true, // autorefresh
        contentBase:  path.resolve(__dirname, 'dist'),
        port:2222
    },
});