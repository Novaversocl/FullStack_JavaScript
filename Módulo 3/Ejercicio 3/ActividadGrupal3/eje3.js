/*3.- Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiv,
es decir si n es 5 deberá imprimir 5,4,3,2,1*/
let n1 = parseInt(prompt('ingrese numero'));


if (Number.isInteger(n1) && n1 < 100) {//Si el numero que se ingreso es un entero y es menor que  100
    console.log("correcto");//Mostramos el mensaje de que si se cumple
}

 else{//Si no se cumple entonces

    console.log("no es correcto");//Mostramos el mensaje de que no se cumple

 }

//Funcion para imprimir la secuencia de numero n  
function secuencia(n){
    for (i=n; i>=0; i--){
        console.log(i);
    };
}
secuencia(n1);//Llamar a la funcion 