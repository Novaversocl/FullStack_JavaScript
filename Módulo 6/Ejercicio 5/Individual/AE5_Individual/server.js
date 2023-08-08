const http = require('http');
const fs = require('fs');
const obtenerAlmuerzos = require('./obtener');

// Crear un servidor HTTP
http.createServer(function (req, res) {
  if (req.url === "/") {
    console.log("Ruta raíz, servir el archivo index.html");

    fs.readFile("index.html", function (err, data) {
      if (err) {
        // Error al leer el archivo, enviar código de estado 500 (Error interno del servidor)
        res.writeHead(500);
        res.end("Error interno del servidor");
        return;
      }

      // Configurar el estado y tipo de contenido de la respuesta HTTP
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);

      // Llamar a la función obtenerAlmuerzos solo en la ruta raíz
      obtenerAlmuerzos();
    });
  } else {
    // Ruta no encontrada, enviar código de estado 404 (No encontrado)
    res.statusCode = 404;
    res.end("Archivo no encontrado");
  }
})

// Escuchar en el puerto 3000
.listen(3000);

// Imprimir un mensaje en la consola indicando que el servidor se ha iniciado en el puerto 3000
console.log("Servidor HTTP iniciado en el puerto 3000");
