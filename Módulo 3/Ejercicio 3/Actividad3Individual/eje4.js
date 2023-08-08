/*4 Cree una funcion que le permita buscar un elemento contenido en el arreglo. nota, el
arreglo solo contendra numeros, y tendra un largo maximo de 100.*/

//Funcion para buscar el elemento
function searchElement(arr, element) {//pasamos como parametro el arreglo y el elemento que se quiere buscar
    //Creamos una variable para almacenar el elemento que queremos buscar 
    let elmt = arr.find(elementt => elementt == element );//Con find recorremos el arreglo y si el elemento 
                                                          //que recorre es igual al elemento que buscamos 
                                                          //entonces nos devuelve el elemento que buscamos 
    //Creamos una variable para almacenar el indice del elemento que queremos buscar 
    let elmtIndex = arr.findIndex(elementt => elementt == element );//Con findIndex recorremos el arreglo y si el elemento 
                                                                    //es igual al elemento que buscamos entonces nos devuelve
                                                                    //la posicion o indice del elemento
    let arre = [];//Creamos un arreglo para guardar los 2 resultados y usarlos luego
    arre.push(elmt, elmtIndex);//Añadimos los resultados (el elemento y el indice del elemento) al arreglo
    return arre;//Retornamos el arreglo con los 2 datos que queremos encontrar
};

//Datos

//Creamos un arreglo de elementos para poder buscar en el 
const numeros4 = [1, 565,  2, 6565, 3, 56586, 4, 2113, 599, 4545, 5663, 88, 12, 99, 54, 22, 55, 44, 77, 68, 17, 5, 6, 32,102, 9996, 8854, 33665, 845, 1656, 168, 256, 1561, 145, 178, 4894,141546, 78996, 26886, 2561, 156, 2156, 156, 1565, 8568, 48986, 53958, 742, 4686, 86486, 7476533, 26, 788, 1456, 484, 8633, 2156, 1535]

let aa = searchElement(numeros4, 4);//Creamos una variable para almacenar el resultado que en este caso es un arreglo de 2 dimensiones
                                   //y le pasamos como parametro el arreglo numeros y el numero que queremos encontrar
console.log("Ejercicio 4")
console.log("Estamos buscando el numero ",aa[0],", este esta en la posicion ", aa[1])
//Mostramos por consola el numero que buscamos que es el elemento 0 del arreglo
//y mostramos el indice que es el elemento 1 del arreglo 



