/*1.- Costruya una función que dado un numero n entero y menor que 100 calcule la sumatoria de 1
hasta n.*/

//Le pediremos un numero por un prompt y le convertiremos en un numero entero
let n = parseInt(prompt('ingrese cantidad de numeros a sumar'));
//Determina si el valor que le pasamos es entero y tambien si es que es menor que 100
if (Number.isInteger(n) && n < 100){
    console.log("número correcto");
    console.log(sumatoria(n));
}else{
    console.log("número incorrecto");
}

//Funcion que nos hace la sumatoria
function sumatoria(n1){//le damos un numero

    let suma = 0;//Creamos una variable para almacenar la sumatoria
    for (i=0; i<=n1; i++)//Iteramos mientras i sea menor a el numero
        suma = suma + i ;//Sumamos el valor de suma mas el valor de el elemento
        return suma; //Retornamos la suma
};