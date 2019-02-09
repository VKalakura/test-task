const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

let destinationFolder = "dev";

if (process.env.NODE_ENV === "production") {
    destinationFolder = "dist";
}

const config = {
    mode: process.env.NODE_ENV,
    entry: {
        app: ["./src/js/app.js", "./src/style/main.sass"]
    },
    output: {
        path: path.resolve(__dirname, destinationFolder),
        // filename: "scripts/[name].[chunkhash].js"
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.s[ca]ss$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },

            {
                test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([destinationFolder]),
        new MiniCssExtractPlugin({
            // filename: "[name].[contenthash].css"
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dev'] }
        }),
        
    ]
};

module.exports = config;