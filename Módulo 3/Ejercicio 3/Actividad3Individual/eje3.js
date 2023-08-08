/*Dado un arreglo de strings que contiene los dias de la semana, cree una funcion que le
permita obtener un dia en particular si se recibe sunumero correspondiente.ej
1 = Lunes , 7 = Domingo.*/

//Funcion para obtener el dia de la semana 
function obtenerDiaSemana(arr,elem2, poss) {//Pasamos como parametro un arreglo, el elemento a buscar y el lugar donde esta posicionado el elemento
    let elmt = arr.find(elementt => elementt == elem2 ); //Con find recorremos el arreglo y si el elemento 
                                                          //que recorre es igual al elemento que buscamos 
                                                          //entonces nos devuelve el elemento que buscamos 
    let elmtIndex = arr.findIndex(elementt => elementt == elem2 );//Con findIndex recorremos el arreglo y si el elemento 
                                                                   //es igual al elemento que buscamos entonces nos devuelve
                                                                   //la posicion o indice del elemento
    let diaa = arr[poss-1];//Creamos una variable para poder almacenar el dia segun la posicion que se nos de (menos uno ya que no nos entregaran las posiciones verdaderas de los arreglos [0, 1, 2...] si no que [1, 2, 3...])
    let arrr = []; //Creamos un arreglo para poder almacenar los resultados
    arrr.push(elmt, diaa, elmtIndex);//Almacenamos los resultados osea las variables en el arreglo (el arreglo, el elemento a buscar, la posicion del elemento a buscar)
    return arrr ;//Retornamos el arreglo con los resultados de los dias
};

//Datos
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];//Creamos un arreglo de dias de la semana para poder trabajar con el 
let dia = obtenerDiaSemana(dias, "Lunes", 1);//Creamos una variable para almacenar el resultado de la funcion
                                               //Le damos como parametro el arreglo dias, luego le damos el elemento que queremos buscar 
                                               //y por ultimo si queremos buscar por posicion le agregamos la posicion en la cual esta el elemento 
console.log("Ejercicio 3")
console.log("Quieres encontrar el dia (", dia[0], ") el cual encontramos =>", dia[1], " ademas podemos ver que esta en la posicion numero ", (dia[2]+1), " del arreglo");
//Mostramos por consola el dia que se quiere buscar, demostramos que lo encontramos y por ultimo mostramos la posicion en la que se encuentra, sumandole 1 ya que si no mostraria
//la verdadera numeracion del arreglo siendo en este caso si la posicion es 1 en el arreglo seria un 0