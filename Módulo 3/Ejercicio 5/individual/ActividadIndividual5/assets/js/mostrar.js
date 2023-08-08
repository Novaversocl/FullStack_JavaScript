



function mostrarDatos(objPers, amounts, cantidadCargas, tramoDos, tramoUno, tramoCorrespondient, montoRecibido, montoTotal, sumadeTodo) {
    console.log(`Nombre: ${objPers.namess}`);
    console.log(`Apellido: ${objPers.lastNamee}`);
    console.log(`Cargas: ${amounts}`);
    console.log(`Cantidad de cargas familiares: ${cantidadCargas}`);
    console.log(`${tramoCorrespondient} tramo semestre anterior ${tramoDos} y tramo de este semestre ${tramoUno}`);
    console.log(`Le corresponden ${montoRecibido} por carga familiar `);
    console.log(`El monto total por las cargas familiares es de ${montoTotal}`);
    console.log(`Su sueldo del mes mas las cargas familiares es de ${sumadeTodo}`);


}

let cargasEstado = "";
if (am0unts[2] == true) {
    cargasEstado = "si"
}

mostrarDatos(objPersonas, cargasEstado, benNumer, am0unts[1], am0unts[3], am0unts[4], am0unts[0], montoaRecibir[0], montoaRecibir[1]);