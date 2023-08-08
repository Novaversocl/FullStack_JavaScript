/*2.- Construya una función que imprima si un número es primo o no, los números primos son
aquellos que son divisibles solo por 1 y por sí mismos.*/


//Funcion para encontrar numeros primos
function esPrimo(numero){//Pasamos como parametro un numero
    if(numero===2){//Si el numero es totalmente igual a el numero 2 
    return true;//entonces nos da verdadero ya que son divisibles por ellos mismos y el 1 osea su resto sea 
   
    }else if(numero<2){//si el numero es menor a 2 
   
    return false;//entonces nos da falso ya que no 
   
    }for(var i=2;i< numero;i++){//Recorremos el arreglo
    if(numero % i ===0){//Verificar si el resto es 0 
        return false;//Retornamos falso
       };
   };
   
   return true;
   
   };
   
   let mensaje=esPrimo(4);//Creamos variable para almacenar la funcion  para verificar si el nunmero es primo
   console.log(mensaje);
   
    if (mensaje == true){//verificar si es true o no para el mensaje
        console.log("es un numero Primo");//Mostramos si el numero es primo
   
    }else {
        console.log("No es un numero primo");//Mostramos si el numero no es primo
    };
    