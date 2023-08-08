//4. Crear un programa que pida al usuario una cantidad de días y que muestre su
//equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
//El resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
//Se debe considerar lo siguiente:
//1 año tiene 365 días
//1 semana tiene 7 días
//Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.

// solicitar ingreso dias
var dias = prompt("Ingrese la cantidad de dias:");

// verificar numero
dias = Number(dias);


  // calcular dias
  //utilizamos math.floor para aproximar decimales
  var años = Math.floor(dias / 365);
  var resto = dias % 365;
  var semanas = Math.floor(resto / 7);
  var diasRestantes = resto % 7;

  // salida
  console.log(dias + " dias equivalen a:");
  console.log(años + " año(s), " + semanas + " semana(s) y " + diasRestantes + " dia(s).");

//






