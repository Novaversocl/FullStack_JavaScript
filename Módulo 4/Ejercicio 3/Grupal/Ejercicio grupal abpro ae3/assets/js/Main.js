// Importamos las clases y objetos necesarios desde el archivo empresa.js
 import { Empresa, Importacion, Rubro  } from './Clases.js';

// Ejemplo de uso
const empresa1 = new Empresa(1, "Novasoft", "12345678-9");
const Rubro1 = new Rubro(1, "Servicios de Software", "Pyme");

console.log(Rubro1);

const importacion1 = new Importacion(1, "Software Punto de Venta", 10, 150000);
const importacion2 = new Importacion(2, "Lector de código de barras", 20, 50000);
const importacion3 = new Importacion(3, "Impresora Térmica usb ", 30, 80000);


empresa1.agregarImportacion(importacion1);
empresa1.agregarImportacion(importacion2);
empresa1.agregarImportacion(importacion3);


console.log(`Total importaciones: ${empresa1.sumaTotalImportaciones()}`);
console.log(`Total número producto * precio unitario: ${empresa1.sumaTotalNumeroProductoPrecioUnitario()}`);
empresa1.mostrarInformacion();


  // Actualizamos los valores de la tabla con los resultados de los métodos de la clase Empresa
  // 
  
  document.getElementById("nombre").innerHTML = empresa1.nombre;
  document.getElementById("id").innerHTML = empresa1.id;
  document.getElementById("rut").innerHTML = empresa1.rut;
  document.getElementById("totalImportaciones").innerHTML = empresa1.sumaTotalImportaciones();



  

  document.getElementById("idR").innerHTML = Rubro1.id;
  document.getElementById("nombreR").innerHTML = Rubro1.nombre;
  document.getElementById("tamañoR").innerHTML = Rubro1.tamaño;

document.getElementById("id1").innerHTML =importacion1.id;
document.getElementById("producto1").innerHTML=importacion1.producto;
document.getElementById("numeroProducto1").innerHTML=importacion1.numeroProducto;
document.getElementById("precioUnitario1").innerHTML=importacion1.precioUnitario;

document.getElementById("id2").innerHTML =importacion2.id;
document.getElementById("producto2").innerHTML=importacion2.producto;
document.getElementById("numeroProducto2").innerHTML=importacion2.numeroProducto;
document.getElementById("precioUnitario2").innerHTML=importacion2.precioUnitario;

document.getElementById("id3").innerHTML =importacion3.id;
document.getElementById("producto3").innerHTML=importacion3.producto;
document.getElementById("numeroProducto3").innerHTML=importacion3.numeroProducto;
document.getElementById("precioUnitario3").innerHTML=importacion3.precioUnitario;

document.getElementById("Modalnombrex").innerHTML = empresa1.nombre;
document.getElementById("idx").innerHTML = empresa1.id;
document.getElementById("rutx").innerHTML = empresa1.rut;
document.getElementById("totalImportacionesx").innerHTML = empresa1.sumaTotalImportaciones();




