//3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
//que la transforme a grados Kelvin y Fahrenheit.(2 Puntos)
//Se debe considerar la siguiente información respecto a la equivalencia de las
//escalas de temperatura:


// Ingresar Temperatura celcius
var Tcelcius = prompt("Ingrese la temperatura en grados Celsius:");

// Convertir el valor ingresado a numero
Tcelcius = Number(Tcelcius);

  // convertir
  var tkelvin = Tcelcius + 273.15;
  var tfarenheit = (Tcelcius * 9/5) + 32;

  // Salida
  console.log("Temperatura en grados Kelvin: " + tkelvin);
  console.log("Temperatura en grados Fahrenheit: " + tfarenheit);
