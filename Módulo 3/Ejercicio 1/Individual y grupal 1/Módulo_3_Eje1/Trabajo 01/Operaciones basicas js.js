// Ingresar numeros
var num1 = prompt("Ingrese el primer numero:");
var num2 = prompt("Ingrese el segundo numero:");

// verificar que lo ingresado son numeros
num1 = Number(num1);
num2 = Number(num2);

// verificar numeros mayores a cero
if (num1 === num2) {
  console.log("debe ser diferente");

}
if (num1 > 0 && num2 > 0) {

  // operacion y salida datos
  var suma = num1 + num2;
  var resta = num1 - num2;
  var division = num1 / num2;
  var multiplicacion = num1 * num2;

  console.log("Suma: " + suma);
  console.log("Resta: " + resta);
  console.log("Division: " + division);
  console.log("Multiplicacion: " + multiplicacion);

} else {
  console.log("Ambos numeros deben ser mayores a cero.");
}
