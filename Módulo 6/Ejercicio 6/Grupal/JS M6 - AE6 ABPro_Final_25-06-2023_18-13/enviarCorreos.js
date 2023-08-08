// Importar el módulo 'nodemailer' para enviar correos electrónicos
const nodemailer = require('nodemailer');
// Importar el módulo 'axios' para realizar solicitudes HTTP
const axios = require('axios');
// Importar el módulo 'fs' para operaciones de sistema de archivos
const fs = require('fs');
// Importar el módulo 'uuidv4' para generar identificadores únicos
const { v4: uuidv4 } = require('uuid');
// Importar el módulo 'path' para manejar rutas de archivos y directorios
const path = require('path');
// Definir la función 'enviarCorreos' para enviar correos electrónicos
function enviarCorreos(destinatarios, asunto, contenido) {

      // Configurar el transporte de correo utilizando el servicio Outlook
      const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: 'Javascript_2023@outlook.es',
          pass: 'Javascript2023'
        }
      });

  // Devolver una promesa para realizar el envío de correos
  return new Promise((resolve, reject) => {
    // Realizar petición a la API de mindicador.cl para obtener datos de cotización
    axios.get('https://mindicador.cl/api')
      .then(response => {
        // Extraer los valores de cotización de la respuesta
        const { dolar, euro, uf, utm } = response.data;
        // Preparar el template con los valores obtenidos de cotización
        const template = `
          <h2>Cotizaciones:</h2>
          <ul>
            <li>Dólar: ${dolar.valor}</li>
            <li>Euro: ${euro.valor}</li>
            <li>UF: ${uf.valor}</li>
            <li>UTM: ${utm.valor}</li>
          </ul>
        `;

        // Concatenar el contenido del usuario con el template de cotización
        const mensaje = `${contenido}\n\n${template}`;
        // Enviar correos electrónicos a cada destinatario itera con map/for los despachos a los otros correos
        const promises = destinatarios.map(correo => {
          return new Promise((resolve, reject) => {
            // Configurar las opciones del correo
            const mailOptions = {
              from: 'Javascript_2023@outlook.es',
              to: correo,
              subject: asunto,
              html: mensaje
            };

            // Generar un identificador único y definir la ruta y nombre del archivo de correo
            const id = uuidv4();
            const archivo = `correo_${id}.txt`;
            const directorioCorreos = path.join(__dirname, 'correos');
            // Crear el directorio "correos" si no existe
            if (!fs.existsSync(directorioCorreos)) {
              fs.mkdirSync(directorioCorreos);
            }
            const archivoRuta = path.join(directorioCorreos, archivo);
            // Guardar el contenido del correo como archivo en la ruta especificada
            fs.writeFile(archivoRuta, mensaje, err => {
              if (err) {
                reject(`Error al guardar el correo electrónico como archivo: ${err}`);
              } else {
                // Construir la URL del archivo de correo
                const archivoURL = `http://localhost:3000/correos/${archivo}`;
                // Enviar el correo electrónico utilizando el transporte configurado
                transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    reject(`Error al enviar el correo electrónico a ${correo}: ${error}`);
                  } else {
                    resolve(`Correo electrónico enviado a ${correo}. Guardado como ${archivoURL}`);
                  }
                });
              }
            });
          });
        });

        // Esperar a que se completen todas las promesas de envío de correos
        Promise.all(promises)
          .then(results => resolve(results))
          .catch(error => reject(error));
      })
      .catch(error => reject(`Error al obtener los datos de mindicador.cl: ${error}`));
  });
}

// Exportar la función 'enviarCorreos' para ser utilizada en otros módulos
module.exports = enviarCorreos;
