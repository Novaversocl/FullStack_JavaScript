// Paso 1 - Importar el módulo http en una constante.
const http = require("http");
// Paso 2 - Importar el módulo url en una constante.
const url = require("url");
// Paso 3 - Importar el módulo File System en una constante.
const fs = require("fs");
const moment = require('moment');
// facilita la manipulación de fechas en JavaScript
const querystring = require("querystring");
 // Importar el módulo querystring para analizar los datos de la solicitud

/* Paso 4 - Crear un servidor con el método createServer del módulo http que esté
disponible en el puerto 8080. */
http
  .createServer(function (req, res) {

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
     // tildes

    /* Paso 5 - Almacenar los parámetros de la consulta en una constante con el método
parse del módulo url y su propiedad query */
    const params = url.parse(req.url, true).query;
    const nombre = params.nombre;
    const contenido = params.contenido;

    /* Paso 6 - Crear una ruta “/crear” que ejecute la creación de un archivo con el método
writeFile del módulo File System, usando los parámetros nombre y contenido de la
url expuestos en la url de la petición. Devuelve un mensaje de éxito al cliente. */
    

    if (req.url.includes("/crear")) {
      const nombreCrear = moment().format("DD-MM-YYYY") + "_" + params.nombre;
      fs.writeFile(nombreCrear, contenido, (err) => {
        if (err) {
          console.error("Error al crear el archivo:", err);
          res.write("Error al crear el archivo");
        } else {
          console.log("Archivo creado con éxito:", nombreCrear);
          res.write("Archivo creado con éxito!");
        }
        res.end();
      });
    }
    
   
    /* Paso 7 - Crea una ruta “/leer” que use el método readFile del módulo File System para
obtener el contenido del archivo cuyo nombre debe ser el obtenido por query string. */
    if (req.url.includes("/leer")) {
      fs.readFile(nombre, (err, data) => {
        res.write(data);
        res.end();
      });
    }
    /* Paso 8 - Crear una ruta “/renombrar” que procese el método rename del módulo
    fileSystem especificando el nombre del archivo devolviendo en su callback un
    mensaje de éxito. */

    if (req.url.includes("/renombrar")) { // Comprueba si la URL contiene "/renombrar"
      const oldPath = querystring.escape(params.nombreOriginal); // el nombre original del archivo
      const newPath = querystring.escape(nombre); // el nuevo nombre del archivo
    
      fs.rename(oldPath, newPath, (err) => { // Renombra el archivo utilizando los nombres de archivo antiguos y nuevos
        if (err) { // Si ocurre un error al renombrar el archivo
          res.write("Error al renombrar el archivo"); // Escribe un mensaje de error en la respuesta
        } else { // Si el archivo se renombró correctamente
          res.write(`El Archivo ${oldPath} fue renombrado por ${nombre}`); // Escribe un mensaje de éxito en la respuesta, indicando el nuevo nombre del archivo
        }
        res.end(); // Finaliza la respuesta
      });
    }
    

    /* Paso 9 - Crear una ruta “/eliminar” que procese el método unlink del módulo File
    System especificando el nombre del archivo devolviendo en su callback un mensaje
    de éxito. */
   

    if (req.url.includes("/eliminar")) {
      
     
      res.write(`Tu solicitud para eliminar el archivo ${nombre}\n`);
      res.write(`se está procesando\n`);

      // Simular el procesamiento con un retraso de 3 segundos
      setTimeout(() => {
        fs.unlink(nombre, (err) => {
          if (err) {
            res.write(`No se pudo eliminar el archivo ${nombre}`);
          } else {
            res.write(`Archivo ${nombre} eliminado con éxito`);
          }
          res.end();
        });
      }, 3000);
    }
    



  })
  .listen(8080, () => console.log("Escuchando el puerto 8080"));

/* Crea una ruta “/leer” que use el método readFile del módulo File System para
  obtener el contenido del archivo cuyo nombre debe ser el obtenido por query string. */
