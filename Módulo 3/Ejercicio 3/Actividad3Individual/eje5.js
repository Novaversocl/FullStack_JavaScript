/*5. Cree un programa que dado un arreglo de numeros desordenados los ordene
ascendentemente.*/

//Funcion para ordenar un arreglo
function orderArr(arr) {//Pasamos como parametro un arreglo
    //Funcion para comparar 2 numeros
    function conditional(a, b) {//Pasamos como parametro 2 numeros 
        return a - b;//Restamos los numeros
        //Si el numero es menor a 0 entonces a ira primero
        //Si el numero es igual a 0 entonces son iguales
        //Si el numero es mayor a 0 entonces b ira primero
    };
    arr.sort(conditional);//Usaremos sort en el arreglo la cual es una
                          //funcion que ordena segun la condicion que le damos 

    return arr;//Retornamos el arreglo ordenado
};

//Datos

//Creamos un arreglo para poder trabajar en el
const numeros= [1, 565, 2, 6565, 3, 56586, 4, 2113, 599, 4545, 5663, 88, 12, 99, 54, 22, 55, 44, 77, 68, 17, 5, 6, 32,102, 9996, 8854, 33665, 845, 1656, 168, 256, 1561, 145, 178, 4894,141546, 78996, 26886, 2561, 156, 2156, 156, 1565, 8568, 48986, 53958, 742, 4686, 86486, 7476533, 26, 788, 1456, 484, 8633, 2156, 1535];

let arrOrder = orderArr(numeros);//Creamos una variable para almacenar el resultado que en este caso es un arreglo de 2 dimensiones
//y le pasamos como parametro el arreglo numeros y el numero que queremos encontrar
console.log("Ejercicio 5")
console.log(arrOrder);//Mostramos por consola el arreglo ordenado