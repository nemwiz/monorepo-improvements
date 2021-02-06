const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');


const PATH_DELIMITER = "[\\\\/]"; // match 2 antislashes or one slash

const safePath = (module) => module.split(/[\\\/]/g).join(PATH_DELIMITER);

const generateIncludes = (modules) => {
    return [
        new RegExp(`(${modules.map(safePath).join("|")})$`),
        new RegExp(
            `(${modules.map(safePath).join("|")})${PATH_DELIMITER}(?!.*node_modules)`
        ),
    ];
};

const transpileModules = ["@mono/domain", "@mono/http-client"]; // using scoped packages

console.log(generateIncludes(transpileModules))

module.exports = {
    entry: {
        'web-app': './src/index.tsx',
        // 'domain': '../domain/src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        alias: {
            '@mono/http-client': path.resolve(__dirname, '../http-client/src/index.ts'),
            '@mono/domain': path.resolve(__dirname, '../domain/src/index.ts')
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
    }
};
