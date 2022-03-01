const path = require("path");

module.exports = {
    // entry point:
    entry: "./src/index.js",

    // output:
    output: {
        // Absolute path:
        path: path.resolve(__dirname, "public/assets"),
        filename: "bundle.js",   
    }
};