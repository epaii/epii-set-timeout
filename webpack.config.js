 
module.exports = {
    mode: "production",
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "epii-set-timeout.js",
        library: "EpiiSetTimeout",
        libraryTarget: "umd",
        globalObject: 'this'
    },
 
    externals: {

    }
};