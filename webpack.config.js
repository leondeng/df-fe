var webpack = require('webpack'),
    // path = require('path'),
    fs = require("fs")
    yargs = require('yargs');

var fileName = 'de-fe',
    plugins = [],
    outputFile,
    envFile = __dirname + '/.env',
    env = 'dev';

if (yargs.argv.p) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  outputFile = fileName + '.min.js';
  env = 'prod';
} else {
  outputFile = fileName + '.js';
}

fs.createReadStream(envFile + '.' + env).pipe(fs.createWriteStream(envFile));
input.close();
require('dotenv').config();

plugins.push(new webpack.DefinePlugin({
    APP_NAME: JSON.stringify(process.env.APP_NAME),
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_ENV: JSON.stringify(process.env.APP_ENV)
}));

// console.log(process.env);

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: outputFile,
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ],

        preLoaders: [
            {
                test: /\.tsx?$/,
                loader: 'tslint',
                exclude: /node_modules/
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins: plugins,

    // Individual Plugin Options
    tslint: {
        emitErrors: true,
        failOnHint: true
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};