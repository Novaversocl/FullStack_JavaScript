/*2 Cree una funcion que dado un arreglo de numeros de largo 10 permita obtener el mayor
numero contenido en el arreglo*/

//Funcion para encontrar numero mayor 
function maxNum(arr) {//Pasamos como parametro un arreglo
    let maxNumber = 0; //Creamos una varible para almacenar el numero mayor iniciada con 0
    for (let i = 0; i < arr.length; i++){//Recorremos el arreglo 
        if(arr[i]>maxNumber) {//Si el elemento en el arreglo es mayor al valor de la variable maxNumber
            maxNumber= arr[i];//guardaremos dicho elemento en la variable maxNumber ya que si hay otro    
        };                    //numero mas grande lo comparara nuevamente y sobre escribira la variable maxNumber  
    };
    return maxNumber;//Retornamos el resultado que viene siendo el valor mayor del arreglo
};

//Datos
const num = [2, 9, 15, 875, 985, 8, 665, 325, 4582, 654];//Creamos un arreglo para poder buscar en el 

let numMax = maxNum(num);//Creamos una variable para almacenar el resultado de la funcion
                         //el cual seria el numero mayor del arreglo         
console.log("Ejercicio 2")           
console.log(numMax);//Mostramos por consola el valor