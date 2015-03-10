module.exports = {
    entry: "./app/app.ts",
    output: {
        filename: "public/main.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            //{test: /\.ts$/, loader: 'typescript-loader?typescriptCompiler=jsx-typescript'}
            {test: /\.ts$/, loader: 'ts?sourceMap!ts-jsx'}
        ]
    }
};
