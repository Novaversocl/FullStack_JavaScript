/*4.- Construya una función que dado un numero n entero mayor que 10 y menor que 1000 calcule
la sumatoria de todos los números pares contenidos en el rango.*/

//Funcion que suma primos 
function Sumasprimos(N) {
    let sum = 0;//Creamos una variable para almacenar el valor de la suma
    
    // Verificar si N es un número válido
    if (N >10 && N < 1000) {//Entre el n mayor a 10 y el n menor a 1000 

        console.log("El número ingresado esta correcto");//Imprimimos que el numero es correcto
        for (let i = 11; i <= N; i++) {//Iteramos mientras i sea menor a el numero
            if (i % 2 === 0) {//Si el resto es igual a 0 
                sum += i; //sumamos i a la variable que almacena la suma
            };
          };
        }else{
            console.log("Fuera de limite");//Imprimimos este mensaje si el numero esta fuera del limite permitido

        };
    return sum;//Retornamos el valor de suma
}

console.log(Sumasprimos(14));//mostramos el resultado de la suma
  
  