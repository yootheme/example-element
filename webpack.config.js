module.exports = {
    context: __dirname,
    entry: {
        'example-element': './example-element.js'
    },
    output: {
        path: __dirname,
        filename: './[name].min.js'
    }
}