const path = require("path");

module.exports = {
    entry: {
        index: './src/index.js',
        planet: './src/planet.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    watch: true,

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: ['src/**/*', 'dist/**/*'],
        liveReload: true
    },

    mode: 'development'
};
