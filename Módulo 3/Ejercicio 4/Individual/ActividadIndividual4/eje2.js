/*2. Cree una función que reciba como parámetro un número entero menor que 20 y retorne el
factorial del número. ej 5! = 1*2*3*4*5*/

function calcularFactorial(numero) {     //Se declara la funcion pasandole como parametro un numero
    let factorial = 1;                     //Se declara la variable
    for (let i = 1; i <= numero; i++) {    //Se agrega un bucle donde i=1 e i es menor o igual al numero.
      factorial *= i;                      // el factorial multiplica a i
      console.log(`el numero ingresado es ${numero} multiplicado por ${i}`);//Mostramos por consola cual es el numero ingresado y por que numero se multiplica
    };
    return factorial;//Retornamos el resultado del factorial
  };
  
  // Ejemplo de uso
  console.log("Ejercicio 2");
  const numero = 5; //Creamos una variable con un numero
  const factorial = calcularFactorial(numero);//Creamos una variable para guardar el numero factorial pasandole la funcion con el numero anterior creado
  console.log(`El factorial de ${numero} es ${factorial}`);//Mostramos en consola el numero y su factorial