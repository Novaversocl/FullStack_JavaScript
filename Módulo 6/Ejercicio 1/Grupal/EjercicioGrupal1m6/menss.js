const https = require('https');
const fs = require('fs');

//Llamar a los argumentos
const fileName = process.argv[2];
const fileExtension = process.argv[3];
const economicIndicator = process.argv[4];
const pesosAmount = process.argv[5];

//llamar a la API
https.get('https://mindicador.cl/api', (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    const apiResponse = JSON.parse(data);
    const currentDate = new Date().toString();
    const dollarValue = JSON.stringify(apiResponse.dolar.valor);

    //Funcion para convertir pesos a dolares
    function convertToDollar(pesos, dollar) {
        const convertedAmount = pesos / dollar;
        return convertedAmount;
    }
    
    //Convertir los pesos a dolares
    let dolarConvert = convertToDollar(pesosAmount, dollarValue); 

    //Crear el template
    const fileContent = `
        A la fecha: ${currentDate}
        Fue realizada cotización con los siguientes datos:
        Cantidad de pesos a convertir: ${pesosAmount} pesos 
        Converido a ${economicIndicator} da un total de: 
        ${dolarConvert}
    `;

    //Crear un archivo con el contenido generado
    fs.writeFile(`${fileName}.${fileExtension}`, fileContent, (error) => {
      if (error) {
        console.error('Error al crear el archivo:', error);
        return;
      }
      console.log('Archivo creado correctamente');

      //Leer el contenido del archivo y mostrarlo por consola
      fs.readFile(`${fileName}.${fileExtension}`, 'utf8', (error, content) => {
        if (error) {
          console.error('Error al leer el archivo:', error);
          return;
        }
        console.log('Contenido del archivo:', content);
      });
    });
  });
}).on('error', (error) => {
  console.error('Error al consultar la API:', error);
});
