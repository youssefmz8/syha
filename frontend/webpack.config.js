const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your app
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        fallback: {
            zlib: require.resolve('browserify-zlib'),
            querystring: require.resolve('querystring-es3'),
            path: require.resolve('path-browserify'),
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            http: require.resolve('stream-http'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Transpile .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // For stylesheets
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: 'development', // or 'production'
};
