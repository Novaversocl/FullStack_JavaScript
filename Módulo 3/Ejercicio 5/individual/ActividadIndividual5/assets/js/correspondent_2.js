
function corresPondent(numBeneficiados, monto, salaryy) {
    let montRecibido = numBeneficiados * monto; 
    let sumTodo = montRecibido + salaryy;
    let arrr = [];
    arrr.push(montRecibido, sumTodo)
    return arrr;
};

let benNumer = 0;
let montoaRecibir = [];
if(am0unts != null){
    benNumer = parseInt(prompt("Ingrese la cantidad de beneficiados "));
    montoaRecibir = corresPondent(benNumer, am0unts[0], salary);
};