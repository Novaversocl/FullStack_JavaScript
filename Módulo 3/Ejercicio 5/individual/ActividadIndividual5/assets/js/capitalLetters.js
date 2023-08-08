//Funcion para convertir a mayusculas
function lettersCapital(names, lastName) {
    names = names.toUpperCase();
    lastName = lastName.toUpperCase();

    let objPer = {
        namess: names,
        lastNamee: lastName
    }

    return objPer;
};


let nam3 = "sara";
let lastName = "martinez";

let objPersonas = lettersCapital(nam3, lastName);