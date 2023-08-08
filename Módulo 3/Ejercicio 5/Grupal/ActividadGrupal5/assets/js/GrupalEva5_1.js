// 1. Cree una función que reciba como parámetros:
// o NOMBRE,
// o APELLIDOS
// o Sueldo actual,
// o Sueldo semestre anterior
// o Valor lógico para indicar si corresponde cargas familiares o no
// o Cantidad de cargas familiares (sólo leerá a quienes si corresponda)

// 2. Cree una función que muestre los datos de:
// o Nombre y Apellidos
// o Sueldo actual
// o Monto de Carga familiar
// o Sueldo Final (al que se le suma el valor de carga familiar.


//Pedimos al usuario de ingrese la siguiente información:
let nombre = prompt("Favor ingresar su nombre :");
let apellidos = prompt("Favor ingresar sus Apellidos :");
let sueldoactual = parseInt(prompt("Favor ingresar su Sueldo actual :"));
let sueldosemestreanterior = parseInt(prompt("Favor ingresar su Sueldo semestre anterior :"));
let cargafamiliar = prompt("Favor ingresar si corresponde cargas familiares si/no :");
let cantidadcargafamiliar = parseInt(prompt("Favor ingresar la Cantidad de cargas familiares :"));

//Funcion para recibir los datos y calcular los montos
function funcionpersona(parametro_nombre, parametro_apellidos, parametro_sueldoactual, parametro_sueldosemestreanterior, parametro_cargafamiliar, parametro_cantidadcargafamiliar) {
    //la variable Valorlógicocargafamiliar es un string vacio
    let Valorlógicocargafamiliar = "";
//si se cumple la condición con el parametro la variable Valorlógicocargafamiliar queda verdadero
    if (parametro_cargafamiliar === "si") {
        Valorlógicocargafamiliar = true

    } else {
        //de lo contrario se visualiza el mensaje
        console.log("No tiene cargas familiares")
    }
//creamos los valores por defecto a utilizar según la imagen de la guia.
    let lot1 = 16828;
    let lot2 = 10327;
    let lot3 = 3264;

    let monto_correspondiente = 0;
    let tramo2 = "";
//si se cumple las condiciones se guardará el tramo con una letra A,B,C,D
    if (parametro_sueldosemestreanterior <= 429899) {
        monto_correspondiente = lot1;
        tramo2 = "A";
    } else if (parametro_sueldosemestreanterior > 429899 && num2 <= 627913) {
        monto_correspondiente = lot2;
        tramo2 = "B";
    } else if (parametro_sueldosemestreanterior > 627913 && num2 <= 979330) {
        monto_correspondiente = lot3;
        tramo2 = "C";
    } else if (parametro_sueldosemestreanterior > 979330) {
        monto_correspondiente = 0;
        tramo2 = "D";
    };
//Se realiza los calculos para obtener el montoRecibido y el sueldo_Total
    let montRecibido = parametro_cantidadcargafamiliar * monto_correspondiente;
    let sueldo_total = montRecibido + parametro_sueldoactual;
//creamos un array vacio
    let arr = [];
    
    //el con método pusch() agregamos los parametros al final del arreglo
    arr.push(parametro_nombre, parametro_apellidos, parametro_sueldoactual, monto_correspondiente, sueldo_total);
    //retornamos el arreglo
    return arr;
};

//Funcion para mostrar los datos
function muestreDatos() {
    //Creamos un arreglo vacio para guardar los datos 
    let array = [];
    //Enviamos variables por parametros a la funcion llamada funcionpersona y ademas se guarda el resultado en el arreglo llamado array.
    array = funcionpersona(nombre, apellidos, sueldoactual, sueldosemestreanterior, cargafamiliar, cantidadcargafamiliar); 
    //una vez que el arreglo guarda los datos se visualizan por consola cada posicion del arreglo. 
    console.log(`Nombre ${array[0]} ${array[1]}`);
    console.log(`Sueldo actual ${array[2]}`);
    console.log(`Monto que le corresponde ${array[3]}`);
    console.log(`Sueldo final ${array[4]}`);
};

//llama a la funcion
muestreDatos();






