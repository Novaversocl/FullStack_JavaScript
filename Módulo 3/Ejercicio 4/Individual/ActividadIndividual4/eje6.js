/*6. cree una función que le permita determinar si una palabra es palíndroma o no, un
palíndromo es una palabra que se escribe de igual manera de izquierda a derecha que de
derecha a izquierda, por ejemplo “somos”*/

function palindromeChecker(str) { //Primero creamos la función, definiendo que debe recibir un string
    const strReversed = str.split("").reverse().join(""); /*Creamos la constante strReversed, en la que
     guardaremos el string invertido*/

    //.split('') lo separa en un array.
    //.reverse() revierte el arreglo.    
   // .join('') Lo vuelve a convertir en string.
    return strReversed === str ? "Es palindromo" : "No es palindromo";//Retornamos una condicion (un operador ternario)
                                                                      //si es que el string obtenido en el calculo de la funcion es 
                                                                      //totalmente igual a el string que le damos a la funcion entonces nos
                                                                      //mostrara la opcion true que seria "es palidromo", pero si no entonces
                                                                      //nos mostraria la opcion false que seria "no es palidromo"
};
    //Por ultimo usando el operador, indicamos que si ambas cadenas son iguales devuelva 'es palindromo', y si no 'no es palindromo'.                                                                    
console.log("Ejercicio 6");

//Creamos 3 variables de tipo string para poder probar la funcion
const varr = "oso";// Es palindromo
const varr2 = "hola";// No es palindromo
const varr3 = "omo";// Es palindromo

//Para cada una de las variables mostramos el string dado y ejecutamos la funcion con ese string para recibir si es o no palidromo
console.log(`El string o palabra ${varr} ` , palindromeChecker(varr));
console.log(`El string o palabra ${varr2} `, palindromeChecker(varr2)); 
console.log(`El string o palabra ${varr3} `, palindromeChecker(varr3)); 
