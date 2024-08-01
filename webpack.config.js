const path = require("path");

module.exports = {
    entry: "./src/index.js", // Punto de entrada de la aplicación
    aoutput: {
        filename: "bundle.js", // Nombre del archivo de salida
        path: path.resolve(__dirname, "dist"), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Expresiones regulares o reger para identificar archivos css
                use: ["style-loader", "css-loader"],  // liberias llamdas louders para procesar archivos css
            },
            {
                test: /\.js$/, // Rogex para identificar archivos javascrip
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: "babel-loader", // loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: ["@babel-preset-env"],
                    },
                },
            },
        ],
    },
    devtool: "source.map", // Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, "dist"), //Carpeta desde el cual el servidor agarrará los archivos
        compress: true, // Habiliar compresion  gzip
        port: 9000, // Puerto del servidor de desarrollo
    },
};