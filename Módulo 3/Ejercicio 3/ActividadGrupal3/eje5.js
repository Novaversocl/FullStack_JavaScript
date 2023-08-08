/*5.-Cree una función que permite dado un numero n imprima la tabla de multiplicar de dicho
numero hasta el 12*/

//Pedimos el numero 
let variable = parseInt(prompt('ingrese numero'));


//Funcion para crear la tabla de multiplicacion
function TablaDeMultiplicar(n) {//Pasamos un numero como parametro
    for (let i = 1; i <= 12; i++) {//Mientras que el i sea menor que 12 se itera
      console.log(`${n} x ${i} = ${n*i}`);//Mostramos por consola los numeros que se
                                          //multiplican con su resultado 
    }
  }
TablaDeMultiplicar(variable);//Llamamos a la funcion pasandole 
                               //como parametro el numero que pedimos
