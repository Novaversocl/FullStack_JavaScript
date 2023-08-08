import { Proveedor, Articulo, TipoProveedor } from './proveedor.js';
// Se importan las clases Proveedor, Articulo y TipoProveedor desde el archivo proveedor.js

function calcularImpuestoTotal(cliente, proveedor) {
  // Se define la función calcularImpuestoTotal que toma como argumentos el nombre del cliente y un objeto proveedor
  const impuesto = 0.19;
  // Se define una constante que almacena la tasa de impuesto
  const precioConImpuesto = proveedor.precio * (1 + impuesto);
  // Se calcula el precio con impuesto a partir del precio del proveedor y la tasa de impuesto
  return `El precio del producto es $: ${proveedor.precio} Pesos,el cliente  ${cliente} debe pagar el impuesto de $: ${(precioConImpuesto - proveedor.precio)} Pesos,El valor total con impuesto incluido es de $: ${precioConImpuesto}`;
  // Se retorna un string que indica el impuesto total a pagar por el cliente, calculado a partir del precio con impuesto y el precio del proveedor
}

const proveedor1 = new Proveedor('Proveedor 1', 'Artículo 1', 10000);
// Se crea una instancia de la clase Proveedor con los argumentos 'Proveedor 1', 'Artículo 1' y 100
const articulo1 = new Articulo('Artículo 1', 'correo@ejemplo.com', '123456789');
// Se crea una instancia de la clase Articulo con los argumentos 'Artículo 1', 'correo@ejemplo.com' y '123456789'
const tipoProveedor1 = new TipoProveedor('Proveedor 2', 'Artículo 2', 200, 'Chile', false);
// Se crea una instancia de la clase TipoProveedor con los argumentos 'Proveedor 2', 'Artículo 2', 200, 'chile' y false
tipoProveedor1.telefono = '987654321';
// Se asigna el valor '987654321' a la propiedad telefono del objeto tipoProveedor1

console.log(proveedor1);
// Se muestra en la consola el objeto proveedor1
console.log(articulo1.getInfoProveedor(proveedor1));
// Se llama al método getInfoProveedor del objeto articulo1, pasando como argumento el objeto proveedor1, y se muestra en la consola el resultado
console.log(tipoProveedor1.getInfoProveedor());
// Se llama al método getInfoProveedor del objeto tipoProveedor1, y se muestra en la consola el resultado
const impuestoTotal = calcularImpuestoTotal('Alan Brito', proveedor1);
// Se llama a la función calcularImpuestoTotal, pasando como argumentos 'Cliente 1' y el objeto proveedor1, y se asigna el resultado a la variable impuestoTotal
console.log(impuestoTotal);
// Se muestra en la consola el valor de la variable impuestoTotal


