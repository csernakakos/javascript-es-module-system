const path = require("path");

module.exports = {
    // WebPack entry point:
    entry: "./src/index.js",

    // WebPack output:
    output: {
        // Absolute path:
        path: path.resolve(__dirname, "public/assets"),
        filename: "bundle.js",   
    },

    // Babel loader:
    module: {
        rules: [{
            // Look for all files that end in .js
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }

};