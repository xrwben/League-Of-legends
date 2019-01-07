const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack-base-conf.js");

module.exports = webpackMerge(webpackBaseConfig, {
  mode: "development",
  plugins: [
    // 全局定义环境变量 
    // 注意，因为这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号。
    // 通常，有两种方式来达到这个效果，使用 '"production"', 或者使用 JSON.stringify('production')。
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    // 添加热更新 如果package命令行中添加了--hot，这里就不用创建，这个插件才会自动添加
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: "0.0.0.0",
		port: "8888",
		contentBase: path.resolve(__dirname, "../dist"),
		compress: true,
		hot: true,
		open: true,
		inline: true,
		historyApiFallback: true,
		overlay: {
			warnings: true,
			errors: true
		},
		proxy: {
			"/leagueOfLegends": {
				target: "http://192.168.0.103:9999",
				secure: false,
			}
			// 代理多个
			// context: ["/api"],
			// target: ""
		}
  }
})