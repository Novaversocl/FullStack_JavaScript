 /* 1  Cree una funcion que dado un numero n cree un arreglo de largo n, donde en cada posicion
  del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1*/

//Funcion para crear el arreglo multiplicado por 2
function createArregloDoble(n) {//Pasamos como parametro un numero n para el tamaño del arreglo
    let arrCreated = [];//Aqui creamos el arreglo
    //Ciclo para llenar 
    for (let i = 0; i < n; i++){//Recorremos el arreglo desde la posicion 0
        arrCreated.push(i);//Agregamos los elementos al arreglo
    };

    arrCreated[0] = 1;//Agregamos el primer valor al arreglo que se pide que sea 1 

    //Ciclo para multiplicar 
    for (let i = 1; i < n; i++){//Recorremos el arreglo desde la posicion 1 (ya que la posicion [0] siempre sera 1)
        arrCreated[i] = arrCreated[i]  * 2; //Agregamos la multiplicacion del elemento por 2 
    };
    return arrCreated;//Retornamos el arreglo doble creado
};

//Datos
let arr = createArregloDoble(10);//Creamos una variable para almacenar el resultado de llamar a la funcion 
console.log("Ejercicio 1")
console.log(arr);//Mostramos el arreglo por consola 



