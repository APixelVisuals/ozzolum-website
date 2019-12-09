const nextSASS = require("@zeit/next-sass");
const path = require("path");

module.exports = nextSASS({
    webpack: config => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        };

        //Allow absolute paths
        config.resolve.modules.push(path.resolve("./"));

        return config;
    }
});