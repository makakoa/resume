const path = require("path");

module.exports = {
	entry: {
		hyptiotes: path.join(__dirname, "hyptiotes.js"),
		scripts: path.join(__dirname, "source/index.js"),
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	mode: "development",
	devtool: "eval-cheap-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 9000,
	},
};
