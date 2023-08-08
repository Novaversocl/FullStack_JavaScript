//5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se
//piden a continuación. (2 Puntos)
//La suma de todos los números.
//El promedio de los 5 números ingresados

// ccrear variable
var suma = 0;
var promedio = 0;
var num1 = prompt("Ingrese el primer numero:");
var num2 = prompt("Ingrese el segundo numero:");
var num3 = prompt("Ingrese el tercer numero:");
var num4 = prompt("Ingrese el cuarto numero:");
var num5 = prompt("Ingrese el quinto numero:");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);
num5 = Number(num5);
suma = Number(suma);
promedio = Number(promedio);

// Calcular suma 
suma = num1 + num2 + num3 + num4 + num5
promedio = suma / 5


// salida

console.log("La suma de los numeros es: " + suma);
console.log("El promedio de los numeros es: " + promedio);


