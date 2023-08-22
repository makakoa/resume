const path = require("path");

const isDev = NODE_ENV === "development";

const extended = isDev
	? {
			ode: "development",
			devtool: "eval-cheap-source-map",
			devServer: {
				static: {
					directory: path.join(__dirname, "dist"),
				},
				compress: true,
				port: 9000,
			},
	  }
	: {};

module.exports = {
	entry: {
		hyptiotes: path.join(__dirname, "hyptiotes.js"),
		scripts: path.join(__dirname, "source/index.js"),
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	...extended,
};
