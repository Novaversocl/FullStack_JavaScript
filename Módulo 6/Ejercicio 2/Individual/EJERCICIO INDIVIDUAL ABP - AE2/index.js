
// ? Paso 1: Importar en una constante el paquete Yargs y en otra el paquete moment
const yargs = require("yargs");
const moment = require("moment");

// Paso 2: Inicializar el método “command” para el paso de parámetros.
yargs
  .command(
    // Paso 3: Definir del comando con el primer parámetro el cual será “Buenos dias”.
    "Saludo",
    // Paso 4: Definir la descripción del comando “Saludo” como segundo parámetro del método “command”.
    "Comando para saludar",
    // Paso 5: Definir el objeto para la configuración del constructor del comando.
    {

    //Paso 6: Declarar que se esperará recibir un argumento llamado “nombre”.
  
       nombre: {

        // Paso 7: Definir la descripción de este argumento.
       describe: "nombre de usuario",


        //Paso 8: Declarar que este argumento es requerido con un true en la propiedad “demand”.
        demandOpcion: true,

         //Paso 9: Declarar el alias del argumento nombre, el cual será “n”. Esto sirve para simplificar la
    //delación de un argumento recortando su mención a solo 1 letra o siglas.
     

        alias: "n",


       },
    },

 

       // Paso 10: Crear la función callback la cual recibe como parámetro el objeto args que contendrá los argumentos como propiedades.
    (args) => {
        // Paso 10: La función mandará un mensaje por consola saludando con el nombre recibido como argumento.
        console.log(`¡Buenos días, ${args.nombre}!`);
      }
    )
    // Paso 11: Concatenar el método command con el método "help" y la propiedad argv.
    .help().argv;


    