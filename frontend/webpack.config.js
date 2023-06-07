const path = require('path'); // The path module provides utilities for working with file and directory paths.
const FaviconsWebpackPlugin = require('favicons-webpack-plugin'); // Plugin for generating favicon icons for the build.

module.exports = {
    watch: false, // Enable watch mode for automatic rebuilds on file changes.
    entry: './src/index.tsx', // The entry point of your application.
    mode: 'development', // Set the mode to 'development', 'production', or 'none'.
    output: {
        path: path.resolve(__dirname, 'dist'),  // The output directory for the bundled files.
        filename: 'bundle.js', // The filename of the generated bundle.
    },
    stats: "normal", // "none": Do not output any information except for errors and warnings.
    // "errors-only": Only output errors.
    // "minimal": Output only important informational messages about the build (default).
    // "normal": Output basic build information.
    // "verbose": Output all available build information, including additional details.

    // The resolve configuration specifies how Webpack resolves module requests. In this case, we are using the
    // extensions property to specify the file extensions that will be resolved. By including .tsx, .ts, and .js
    // extensions, Webpack will be able to resolve import statements without specifying the file extension explicitly.
    // For example, instead of writing import MyComponent from './MyComponent.js', you can simply write import
    // MyComponent from './MyComponent'.
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Specify the file extensions to resolve.
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: './public/favicon.ico',
            outputPath: './',
            publicPath: '/',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/, // Regular expression to select which files should be processed
                exclude: /node_modules/, // Exclude the node_modules directory
                use: {
                    loader: 'babel-loader', // Use the Babel loader to process JavaScript files
                    options: {
                        presets: ['@babel/preset-env'], // Babel presets for JavaScript compilation
                    },
                },
            },
        ],
    },
};
