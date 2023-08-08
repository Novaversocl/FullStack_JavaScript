///1. Crear una aplicación que devuelva la fecha actual sumando 10 días y en el siguiente formato
//“dddd”

const moment = require('moment');

// Obtener la fecha actual
const fechaHoy = moment();

// Sumar 10 días a la fecha actual
const fechaActualizada = fechaHoy.add(10, 'days');

// Imprimir la fecha en el formato "dddd"
console.log(fechaActualizada.format('dddd'));