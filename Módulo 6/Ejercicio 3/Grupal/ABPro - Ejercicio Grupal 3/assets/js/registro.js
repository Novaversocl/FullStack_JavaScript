const { validarNombreApellido,mostrarAlerta } = require("./validar"); // Importar la función validarNombreApellido del módulo 'validar'


const http = require("http"); // Importar el módulo http en una constante

const url = require("url"); // Importar el módulo url en una constante

const fs = require("fs"); // Importar el módulo File System en una constante

const moment = require("moment"); // Facilita la manipulación de fechas en JavaScript

const querystring = require("querystring"); // Importar el módulo querystring para analizar los datos de la solicitud

const uuid = require("uuid"); // Importar el paquete uuid

const axios = require("axios");
const chalk = require("chalk"); // Importar el paquete chalk para estilizar la salida en consola

const lodash = require("lodash");

const usuariosRegistrados = []; // Array para almacenar los usuarios registrados

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // Establecer el encabezado de la respuesta

    const params = url.parse(req.url, true).query; // Obtener los parámetros de la URL

    let Nombre = params.Nombre; // Se deja "let" para permitir la reasignación de Nombre
    let Apellido = params.Apellido; // Se deja "let" para permitir la reasignación de Apellido

    const id = uuid.v4().slice(0, 6); // Generar un ID único utilizando el paquete uuid
    const timestamp = moment().format("MMMM-DD-YYYY hh:mm:ss a"); // Obtener la fecha y hora actual en un formato específico utilizando el paquete moment

    if (req.url.includes("/agregar")) {
      Nombre = Nombre.trim(); // Eliminar espacios en blanco al inicio y al final del nombre
      Apellido = Apellido.trim(); // Eliminar espacios en blanco al inicio y al final del apellido

      if (!validarNombreApellido(Nombre, Apellido)) {
        // Validar el nombre y apellido utilizando la función validarNombreApellido del módulo 'validar'
        // res.write("Por favor, ingresa un nombre y un apellido válidos.");
        
        const alertScript = `<script>alert("Favor ingresar los datos correctos");</script>`;
        res.write(alertScript);
        res.write('<meta http-equiv="refresh" content="0; url=http://127.0.0.1:5500/regristro.html" />');
      
       
        
        
         // Escribir mensaje de error en la respuesta
        res.end(); // Finalizar la respuesta
      } else {
        console.log(Nombre);
        console.log(Apellido);

        res.write("Usuario registrado correctamente:"); // Escribir mensaje de éxito en la respuesta
        res.write("\n");
        res.write("\n");
        res.write(`Nombre  : ${Nombre}`); // Escribir el nombre en la respuesta
        res.write("\n");
        res.write(`Apellido: ${Apellido}`); // Escribir el apellido en la respuesta

        console.log(Nombre);
        console.log(Apellido);

        usuariosRegistrados.push({ Nombre, Apellido, id, timestamp }); // Agregar el usuario al array de usuarios registrados

        console.log("Usuario registrado correctamente:"); // Mostrar mensaje de éxito en la consola
        usuariosRegistrados.forEach((usuario) => {
          console.log(
            `Nombre: ${usuario.Nombre}, Apellido: ${usuario.Apellido}, ID: ${usuario.id}`
          );
        });

        res.end(); // Finalizar la respuesta
      }
    }

    if (req.url.includes("/listar")) {
      res.setHeader("Content-Type", "text/plain");
      console.log("Listado de usuarios:"); // Mostrar título en la consola
      res.write("Listado de usuarios:\n"); // Escribir título en la respuesta
      res.write("\n");
      usuariosRegistrados.forEach((usuario) => {
        const usuarioInfo = `Nombre: ${usuario.Nombre}, Apellido: ${usuario.Apellido}, ID: ${usuario.id}, Timestamp: ${usuario.timestamp}`;
        res.write(usuarioInfo + "\n"); // Escribir información de cada usuario en la respuesta

        console.log(chalk.bgWhite(chalk.blue(usuarioInfo))); // Mostrar información de cada usuario en la consola con estilo usando el paquete chalk
      });

      res.end(); // Finalizar la respuesta
    }

    // ...

    if (req.url.includes("/api")) {
      res.setHeader("Content-Type", "text/plain");
      console.log("Registros usando API:"); // Mostrar título en la consola
      const numRegistros = 7; // Número de registros de usuarios que deseas hacer
      let registros = ""; // Cadena para almacenar los registros

      const realizarRegistro = async (indice) => {
        if (indice >= numRegistros) {
          console.log("Registros completados");
          res.write(registros); // Enviar los registros como respuesta al cliente
          res.end(); // Finalizar la respuesta
          return;
        }

        try {
          const response = await axios.get("https://randomuser.me/api/"); // Envía una solicitud GET a la API de randomuser
        
          if (
            response.data && // Verifica si la respuesta contiene datos
            response.data.results && // Verifica si los datos contienen resultados
            response.data.results.length > 0 // Verifica si el array de resultados tiene al menos un elemento
          ) {
            const usuario = response.data.results[0]; // Obtiene el primer usuario del array de resultados
            const nombre = usuario.name.first; // Extrae el primer nombre del usuario
            const apellido = usuario.name.last; // Extrae el apellido del usuario
            const id = uuid.v4().slice(0, 6); // Genera un ID único y toma los primeros 6 caracteres
            const timestamp = moment().format("YYYY-MM-DD HH:mm:ss"); // Obtiene la marca de tiempo actual en el formato especificado
        
            usuariosRegistrados.push({ // Agrega la información del usuario al array usuariosRegistrados
              Nombre: nombre,
              Apellido: apellido,
              id: id,
              timestamp: timestamp,
            });

            const registro = `Usuario registrado correctamente: ${nombre} ${apellido} (ID: ${id}), Timestamp: ${timestamp}\n`;
            
            // registros tuve que agregar esa variable para que se vea por el navegador
            registros += registro; // Agregar el registro a la cadena

            console.log(chalk.bgWhite(chalk.blue(registro))); // Mostrar registro en la consola con estilo usando el paquete chalk
          }

          realizarRegistro(indice + 1); // Llamada recursiva para realizar el siguiente registro
        } catch (error) {
          console.log("Error al obtener datos de la API Random User:", error);
          realizarRegistro(indice + 1); // Llamada recursiva para intentar el siguiente registro
        }
      };

      realizarRegistro(0); // Iniciar el proceso de registro
    }
  })
  .listen(8080, () => console.log("Escuchando el puerto 8080")); // Iniciar el servidor y mostrar mensaje de éxito en la consola
