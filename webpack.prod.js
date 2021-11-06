const path = require("path");
const common  = require("./webpack.common");
const { merge } = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin({
        filename: "[name].[hash].css"
    })],
    output: {
        filename: "[name].[hash]..bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
});