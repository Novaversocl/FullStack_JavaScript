let addmissDate = new Date("12/12/2020");//Le entregamos un tipo de dato date
//let currentDate = new Date("04/21/2023");//Le entregamos un segundo tipo de dato date
let fechaActual = new Date();

/*
let dia = fechaActual.getDate().toString().padStart(2, '0');
let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
let anio = fechaActual.getFullYear().toString();
let fechaFormateada = `${dia}/${mes}/${anio}`;*/






const dates = (dateAdmiss, dateCurrent) =>{//Usando una funcion flecha pasamos como párametro entre parentesis la fecha de ingreso
                                           //y la fecha de entrada
    //Calcular los dias
    let millisecondsDay = 24 * 60 * 60 * 1000;//sacamos los milisegundos por dia multiplicando 24 horas por 60 minutos
                                              //por 60 segundos y por 1000 milisegundos

    let millisecondsElapsed = Math.abs(dateCurrent.getTime() - dateAdmiss.getTime()); //Variable para los milisegundos transcurridos restando la fecha actual con la fech de ingreso
                                                                                      //con math abs() trabajamos con el valor absoluto del resultado

    let elapsedDays = Math.round(millisecondsElapsed/millisecondsDay); //Variable para los dias transcurridos tenemos que dividir los milisegundos transcurridos en los milisegundos por dia 
    console.log("Desde el dia", dateAdmiss.getDate(), "del mes", dateAdmiss.getMonth(), "hasta ahora su permanencia ha sido de",elapsedDays, "dias"); //Mostramos los datos
    
    //Calcular los meses 
    let difference = millisecondsElapsed / 1000;//Calculamos la diferencia entre los milisegundos transcurridos y 1000 milisegundos que tiene un segundo
    difference /= (60 * 60 * 24 * 7 * 4);//Dividimos la diferencia entre los segundos de un dia multiplicado por los minutos
                                         //de una hora multiplicado por la cantidad de horas de un dia multiplicado por cuantos 
                                        //dias tiene una semana multiplicado por el numero de semanas que tiene un mes
    
    let monthElapsed = Math.abs(Math.round(difference));//Variable para los meses transcurridos round() para redondear al entero mas cercano
    console.log("Desde el dia", dateAdmiss.getDate(), "del mes", dateAdmiss.getMonth(), "hasta ahora su permanencia ha sido de",monthElapsed, "meses");//Mostramos los datos

    //Calcular los años
    let differenceYears = millisecondsElapsed/1000; //Calculamos la diferencia entre los milisegundos transcurridos y 1000 milisegundos que tiene un segundo
    differenceYears /= (60 * 60 * 24);//Dividimos por horas, minutos y segundos 
    differenceYears /= 365.25; //Dividimos por los dias del año (.25 porque hay años que tienen un dia mas)

    let yearsElapsed = Math.abs(Math.round(differenceYears));//Variable para años transcurridos 
    console.log("Su permanencia es de", yearsElapsed, "años,", monthElapsed, "meses y",elapsedDays, "dias");//Mostramos los datos

    //Calcular cuanto falta para terminar el año actual
    let presentDate = new Date();//Fecha del presente 
    let lastDayYear = new Date(presentDate.getFullYear(), 11, 31); // mes 11 corresponde a diciembre (Comienzan en 0 como los arreglos)
    let differenceMilliseconds = lastDayYear - presentDate;//Diferencia entre el ultimo dia y el dia presente 
    let daysMissing = Math.abs(Math.round(differenceMilliseconds / (1000 * 60 * 60 * 24))); // divide la diferencia de milisegundos entre un día en milisegundos y redondea al entero más cercano
    console.log("Para completar el año de permanencia faltan", daysMissing, "Dias");//Mostramos los datos
    

};


//dates(addmissDate, fechaActual);//Llamamos a la funcion