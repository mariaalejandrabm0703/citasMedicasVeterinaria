const path = require('path');

module.exports = {
    entry: './js/app.js', // entrada principal
    output: {             // salida
        path: path.resolve(__dirname), // libreria nodejs
        filename: 'bundle.js',
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/'), //carpeta del contenido
        compress: true,
        port: 9000 //puerto
    },
    module: { // loaders que se quieren agregar
        rules: [// configurar un nuevo loeader, se debe indicar los archivos que quiero interpretar
            // y el loader que voy a utilizar
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {}
        ]
    }
}