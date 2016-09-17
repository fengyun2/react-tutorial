const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const T = process.env.npm_lifecycle_event
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body'
})

const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    HTMLWebpackPluginConfig
]

let common = {
    entry: [
        `${__dirname}/src/index.js`
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
        alias: {
            ROOT: path.join(__dirname, 'src'),
            COMPONENTS: path.join(__dirname, 'src/components'),
            CONTAINERS: path.join(__dirname, 'src/containers'),
            ACTIONS: path.join(__dirname, 'src/actions'),
            STORE: path.join(__dirname, 'src/store'),
            REDUCERS: path.join(__dirname, 'src/reducers'),
            CONSTANTS: path.join(__dirname, 'src/constants')
        }
    },
    eslint: {
        configFile: './.eslintrc',
        failOnWarning: false,
        failOnError: true
    },
    module: {
        preLoaders: [{
            test: /\.jsx$|\.js$/,
            loader: 'eslint',
            include: `${__dirname}/src`,
            exclude: /bundle\.js$/
        }],
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            // {
            //     test: /\.(css|scss)$/,
            //     loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass!postcss'
            // },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.posix.join(__dirname, 'public', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: plugins,
    postcss: function() {
        return [precss, autoprefixer]
    }
}

if (T === 'dev' || 'T' === 'start' || !T) {
    module.exports = merge(common, {
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST || '0.0.0.0',
            port: process.env.PORT // 8080
        },
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}

if (T === 'build') {
    module.exports = merge(common, {})
}