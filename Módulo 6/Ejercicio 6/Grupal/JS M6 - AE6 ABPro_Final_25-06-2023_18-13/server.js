// Importar el módulo 'enviarCorreos'
const enviarCorreos = require("./enviarCorreos");
// Importar los módulos 'url', 'http' y 'fs'
const url = require("url");
const http = require("http");
const fs = require("fs");

// Crear un servidor HTTP
http
  .createServer(function (req, res) {
    // Configurar el estado y tipo de contenido de la respuesta HTTP
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Servidor HTTP iniciado");

    // Obtener los parámetros de la URL de la solicitud
    const params = url.parse(req.url, true).query;
    const paraFormulario = params.paraFormulario;
    const asuntoFormulario = params.asuntoFormulario;
    const contenidoFormulario = params.contenidoFormulario;

    // Comprobar si la URL comienza con '/enviarCorreos'
    if (req.url.startsWith("/enviarCorreos")) {
      // Imprimir los valores de los parámetros recibidos
      console.log("para     " + paraFormulario);
      console.log("asunto     " + asuntoFormulario);
      console.log("contenido    " + contenidoFormulario);

      // Configurar los valores para enviar correos
      const destinatarios = [paraFormulario];
      const asunto = asuntoFormulario;
      const contenido = contenidoFormulario;

      // Enviar correos utilizando la función 'enviarCorreos'
      enviarCorreos(destinatarios, asunto, contenido)
        .then((results) => console.log(results))
        .catch((error) => console.error(error));
    }
  })
  // Escuchar en el puerto 3000
  .listen(3000);

// Imprimir un mensaje en la consola indicando que el servidor se ha iniciado en el puerto 3000
console.log("Servidor HTTP iniciado en el puerto 3000");
