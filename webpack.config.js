var webpack = require('webpack'),
    yargs = require('yargs');

var fileName = 'de-fe',
    plugins = [],
    outputFile,
    envFile = '.env';

if (yargs.argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        // minimize: true,
        sourceMap: true,
    }));

    plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true,
    }));

    outputFile = fileName + '.min.js';
    envFile = envFile + '.prod';
} else {
    outputFile = fileName + '.js';
}

require('dotenv').config({path: envFile});

plugins.push(new webpack.DefinePlugin({
    APP_NAME: JSON.stringify(process.env.APP_NAME),
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_ENV: JSON.stringify(process.env.APP_ENV)
}));

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
        extensions: [/*"",*/ ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    emitErrors: true,
                    failOnHint: true
                }
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ],
    },

    plugins: plugins,

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};