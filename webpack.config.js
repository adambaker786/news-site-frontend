const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|gif|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [".js", ".json", "css"]
    },
    devServer: {
        port: 3000,
    },
};
