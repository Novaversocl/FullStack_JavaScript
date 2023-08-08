//Num1 es el sueldo actual
//num2 es el sueldo anterior
function amoUnts(num1, num2, cargFam) {

    if(cargFam == "si"){
        cargFam = true;
    }else{
        console.log("No tiene asignacion familiar");
    };

// Definir  montos 
    let lot1 = 16828;
    let lot2 = 10327;
    let lot3 = 3264;

    //Revisar que monto le corresponde y tramo
    //segun el salario del semestre anterior
    let corresp = 0;
    let tramo2 = "";
    if(num2 <= 429899){
        corresp = lot1;
        tramo2 = "A";
    }else if(num2 > 429899 && num2 <= 627913){
        corresp = lot2;
        tramo2 = "B";
    }else if(num2 > 627913 && num2 <= 979330){
        corresp = lot3;
        tramo2 = "C";
    }else if(num2 > 979330){
        corresp = 0;
        tramo2 = "D";
    };

    // Definir  tramo para el primer semestre

    let tramo1 = "";
    if(num1 <= 429899){
        tramo1 = "A";
    }else if(num1 > 429899 && num2 <= 627913){
        tramo1 = "B";
    }else if(num1 > 627913 && num2 <= 979330){
        tramo1 = "C";
    }else if(num1 > 979330){
        tramo1 = "D";
    };

    // Comparar tramos de semestres

    let tramoCorrespondiente = "";
    if (tramo1 === tramo2) {
        tramoCorrespondiente = "Es el mismo tramo que el semestre anterior";
    }else{
        tramoCorrespondiente = "No es el mismo tramo que el semestre anterior";
    }

    // Crear un array con montos, tramos e informacion de  la carga familiar

    let arr = []
    arr.push(corresp, tramo2, cargFam, tramo1, tramoCorrespondiente)

    return arr;
};

function corresPondent(numBeneficiados, monto, salaryy) {
    let montRecibido = numBeneficiados * monto; //se calcula el monto recibido multiplicando el numero de beneficiados por el monto
    let sumTodo = montRecibido + salaryy; //se suma el monto recibido mas el sueldo
    let arrr = []; // se crea un array vacio
    arrr.push(montRecibido, sumTodo )//se llena el array con los datos montRecibido y sumTodo
    return arrr;
};