const path = require('path');
const isProduction = process.env.NODE_ENV === "production";

const config = {
    mode: isProduction ? "production" : "development",
    entry: {
        app: "./app/common/scripts/app.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets/scripts'),
        filename: "[name].min.js"
    },
	devtool: isProduction ? false : "source-map",
};

module.exports = config;