// Algunos requires necesarios
var path = require('path');

// Creamos el servidor web usando Express dentro del entorno de Node.js
var express = require('express');
var app = express();

//Indicamos al servidor que cualquier fichero que le pidan
//lo podrá encontrar en la carpeta clientFiles
app.use(express.static('clientFiles'));


// En caso de que la ruta web sea la raiz
app.get('/', function(req, res) {
    // Devolvemos el fichero index de la carpeta de ficheros del cliente
    res.sendFile(path.join(__dirname + '/clientFiles/index.html'));
});

// Escuchamos en el puerto 8000
app.listen(8000);
