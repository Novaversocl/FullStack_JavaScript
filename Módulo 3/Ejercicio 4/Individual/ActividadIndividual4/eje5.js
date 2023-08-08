/*5. cree una función que permita calcularla serie de fibonacci hasta un número entero menor
que 20, en la serie cada número está dado por la suma de los dos anteriores.*/


let variable1 = parseInt(prompt('ingrese numero 1 : '));//Creamos una variable para almacenar un numero que le pidamos al usuasrio 
                                                       //ademas lo converitimos a entero
console.log("Ejercicio 5");
if(variable1 <20) {//Condicional que nos revisa si es que el numero pasado es mas pequeño que el numero 20
    
    console.log("Es menor a 20");//Si es asi mostramos por consola que es menor a 20
  
    //Ejemplo de uso
    let hasta = variable1;//Creamos una variable con un nombre distinguible para almacenar el numero
    let serie = calcularFibonacci(hasta);//Creamos una variable para almacenar el resultado de la funcion pasandole el numero que nos entregaron
    console.log(`La serie de Fibonacci hasta ${hasta} es: ${serie}`);//Mostramos por pantalla en numero hasta el cual se llegara (el numero dado) 
                                                                     //y mostramos el resultado que seria una serie de numeros hasta el numero dado

}else{
    console.log("Debe ser menor a 20");//Si no es menor a 20 mostramos en consola que no lo es
};

function calcularFibonacci(hasta) {//Creamos la variable pasandole como parametro el numero hasta el cual queremos mostrar la serie
    let a = 0, b = 1, c; // Inicializamos a=0 y b=1, que son los primeros dos números de la serie. c lo dejamos vacio
    let serie = "0, 1"; // Inicializamos la serie con los dos primeros números como una cadena de texto
    for (let i = 2; i <= hasta; i++) { // Iteramos desde el tercer número de la serie hasta el número dado
        c = a + b; // Calculamos el siguiente número de la serie sumando los dos anteriores
        a = b; // Actualizamos a para que sea el segundo número anterior al siguiente número de la serie
        b = c; // Actualizamos b para que sea el primer número anterior al siguiente número de la serie
        serie += ", " + c; // Agregamos el siguiente número de la serie a la cadena de texto de la serie separado por comas
    };
    return serie; // Devolvemos la serie completa como una cadena de texto
};