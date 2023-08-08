
let salary = 400000;
let salary2 = 700000;

function amoUnts(num1, num2) {
    let cargFam = prompt("Tiene cargas familiares si/no");

    if(cargFam == "si"){
        cargFam = true;
    }else{
        console.log("No tiene asignacion familiar");
    };


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

    let tramoCorrespondiente = "";
    if (tramo1 === tramo2) {
        tramoCorrespondiente = "Es el mismo tramo que el semestre anterior";
    }else{
        tramoCorrespondiente = "No es el mismo tramo que el semestre anterior";
    }


    let arr = []
    arr.push(corresp, tramo2, cargFam, tramo1, tramoCorrespondiente)

    return arr;
};

let am0unts = amoUnts(salary, salary2);
console.log(`Al trabajador ${objPersonas.namess} ${objPersonas.lastNamee} le corresponde un valor de ${am0unts[0]} de asignacion familiar`);