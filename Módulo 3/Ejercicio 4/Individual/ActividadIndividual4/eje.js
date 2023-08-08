/*1. Cree una función que reciba como parámetros dos números enteros y retorne otro entero
que sea el primer número elevado al segundo.*/


let variable = parseInt(prompt('ingrese numero 1 : '));  //se declara la variable 1
let variable2 = parseInt(prompt('ingrese numero 2 : '));  //se declara la variable 2

function enteroCuadrado(x,y){//se declara la funcion pasandole como parametro 2 numeros
    let cuadrado = Math.pow(x,y);//Creamos una variable para guardar el resultado de ocupar la
                                 //funcion math pow la cual pasandole los dos numeros nos dara
                                 //la base que seria x elevada al exponente que seria y
    console.log(cuadrado);//Mostramos por consola nuestra variable con el resultado 
    return cuadrado;//Retornamos la variable con el resultado
};

console.log("Ejercicio 1");
enteroCuadrado(variable,variable2);//Llamamos a la funcion pasandole como parametro los numeros 
                                   //que le pedimos al usuario