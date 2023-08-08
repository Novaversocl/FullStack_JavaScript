//Primero le pedimos la edad a el usuario mediante un mensaje emergente 
//esta edad la guardaremos en la variable edad 
let edad = parseInt(prompt("Ingrese su edad"));


//Creamos un condicional para verificar si es que la persona es mayor o igual a 18 años
//tomando el valor que guardamos en la variable edad
if(edad >= 18){
    alert("Bienvenido pequeño camaron") //Si el usuario tiene 18 o mas entonces le enviamos un mensaje con un alert de bienvenida 
}else{
    //Si el usuario no tiene 18 o mas edad le avisamos con un alert que no puede ingresar a la pagina y lo redirigimos a otra pagina con un mensaje 
    alert("No estas autorizado")
    window.location.href = "prohibido.html"; //objeto para redirigir a otra ruta
}

//Creamos alertas para pedir los datos 
let nombre = prompt("Ingrese su nombre: "); //Pedimos por pantalla el nombre del alumno
let carrera = prompt("¿En que carrera estas?");//Pedimos por pantalla la carrera que cursa el alumno


let ramo1 = prompt("Ingresa ramo 1");//Pedimos por pantalla el nombre del ramo 

let nota1 = parseInt(prompt("Ingresa nota 1"));//Pedimos por pantalla la primera nota de este ramo

//Creamos un condicional para validar 
    //Si no existe la nota 1 O con typeof obtenemos el tipo de dato y comparamos con el operador de identidad si es que la nota 1 es string 
if (!nota1 || typeof nota1 === 'string') {//Si uno de los dos condicionales se cumple (ya que tenemos el operador or) entonces se ejecutara este condicional
    alert("La nota no puede ser un texto o estar vacío");//Mostrandonos un mensaje de alerta con los posibles errores
  };

//Luego seguimos de la misma manera para todas las demas notas 
let nota2 = parseInt(prompt("Ingresa nota 2"));

if (!nota2 || typeof nota2 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

let nota3 = parseInt(prompt("Ingresa nota 3"));

if (!nota3 || typeof nota3 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

let notaApr1 = parseInt(prompt("Ingrese nota de aprobacion"));//Pedimos la nota de aprobacion 

if (!notaApr1 || typeof notaApr1 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

//Pedimos el nombre y las notas del segundo ramo 
let ramo2 = prompt("Ingresa ramo 2");

let nota12 = parseInt(prompt("Ingresa nota 1"));

if (!nota12 || typeof nota12 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

let nota22 = parseInt(prompt("Ingresa nota 2"));

if (!nota22 || typeof nota22 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

let nota32 = parseInt(prompt("Ingresa nota 3"));

if (!nota32 || typeof nota32 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

let notaApr12 = parseInt(prompt("Ingrese nota de aprobacion"));

if (!notaApr12 || typeof notaApr12 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

//Pedimos el nombre y las notas de tecer ramo, en este caso solo pediremos 2 notas ya que la tercera esta pendiente
let ramo3 = prompt("Ingresa ramo 3");

let nota13 = parseInt(prompt("Ingresa nota 1"));

if (!nota13 || typeof nota13 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

let nota23 = parseInt(prompt("Ingresa nota 2"));

if (!nota23 || typeof nota23 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  };

let notaApr13 = parseInt(prompt("Ingrese nota de aprobacion"));

if (!notaApr13 || typeof notaApr13 === 'string') {
    alert("La nota no puede ser un texto o estar vacío");
  }; 
  

//Creamos una funcion que se llama promedio para sacar el promedio pasandole 3 notas como parametro, para que las ocupe en el calculo
function promedio(n1, n2, n3) {
    let suma = (n1 + n2 + n3); //Creamos una variable para almacenar la suma de las 3 notas
    let prom = (suma / 3); //Creamos una variable para almacenar la suma de las 3 notas dividida en 3
    return prom; //retornamos el valor del promedio del ramo 
};



//Creamos otra funcion que se llame promedio2 para poder sacar el promedio pasandole 2 notas como parametro, para que las ocupe en el calculo
function promedio2(n1,n2) {
  let notadeseada3=(notaApr13*3); //Creamos una nueva variable para almacenar el resultado de la multiplicacion de la nota para aprobar por 3 que son la catidad de notas 
  let suma3 = notadeseada3-(n1 + n2);//Creamos una nueva variable para almacenar la resta entre la nota deseada menos la suma de la nota 1 mas la nota 2 
  let prom3 = suma3; //Creamos otra variable para almacenar la suma con otro nombre 
  return prom3; //Retornamos el valor del promedio del tercer ramo en este caso
  
};

//Llamamos a las funciones
let promedioR1 = promedio(nota1, nota2, nota3);//Llamamos a la funcion de promedio para sacar el promedio de las 3 notas del primer ramo, ya que le pasaremos como parametro dichas notas
let promedioR2 = promedio(nota12, nota22, nota32);//Llamamos a la funcion de promedio para sacar el promedio de las 3 notas del segundo ramo, ya que le pasaremos como parametro dichas notas

let promedioR3 = promedio2(nota13, nota23); //Llamamos a la funcion de promedio2 para sacar el promedio de las 2 notas del tercer ramo, ya que le pasaremos como parametro dichas notas. En este caso
                                            //tendremos solo 2 notas ya que la tercera esta pendiente

//Nombre y carrera
let namee = document.getElementById("namee"); //Creamos una variable para obtener el id "namee" de un elemento 
namee.innerHTML = nombre; //Cuando obtenemos esa id podemos usar innerHTML para agregar en este caso en el espacio de la tabla con id "namee" el nombre que el usuario nos proporciono 

//Hacemos lo mismo con los siguientes elementos para poder agregar a cada uno a la tabla 
let car = document.getElementById("car");
car.innerHTML = carrera;

//Nombres de ramos
let ramo1m1 = document.getElementById("ramo1m1");
ramo1m1.innerHTML = ramo1;

let ramo2m1 = document.getElementById("ramo2m1");
ramo2m1.innerHTML = ramo2;

let ramo3m1 = document.getElementById("ramo3m1");
ramo3m1.innerHTML = ramo3;

//Notas 1 
let nota1m1 = document.getElementById("nota1m1");
nota1m1.innerHTML = nota1;

let nota2m1 = document.getElementById("nota2m1");
nota2m1.innerHTML = nota2;

let nota3m1 = document.getElementById("nota3m1");
nota3m1.innerHTML = nota3;


//Notas 2 
let nota1m2 = document.getElementById("nota1m2");
nota1m2.innerHTML = nota12;

let nota2m2 = document.getElementById("nota2m2");
nota2m2.innerHTML = nota22;

let nota3m2 = document.getElementById("nota3m2");
nota3m2.innerHTML = nota32;

//Notas 3
let nota1m3 = document.getElementById("nota1m3");
nota1m3.innerHTML = nota13;

let nota2m3 = document.getElementById("nota2m3");
nota2m3.innerHTML = nota23;



//Promedios
let prom1m1 = document.getElementById("prom1m1");
prom1m1.innerHTML = promedioR1;

let prom2m1 = document.getElementById("prom2m1");
prom2m1.innerHTML = promedioR2;

// let prom3m1 = document.getElementById("prom3m1");
// prom3m1.innerHTML = promedioR3;



let menssProm = ""; //Creamos una variable de tipo string vacia para poder utilizarla luego
//Esta variable se puede ocupar en cualquiera de los siguientes casos ya que como esta vacia al momento de 
//darle un valor este valor se usara solo dentro de el lugar donde se llame en este caso los if y con los innerHTML le damos su 
//valor 


//Con este condicional sabremos si se paso o no el ramo 1
if(promedioR1 < notaApr1){//Compararemos si es que el promedio es mas bajo que la nota de aprobacion entonces 
    menssProm = document.getElementById("menssProm");//buscamos el elemento con el id de "menssProm"
    menssProm.innerHTML = "Tu nota es " + promedioR1 + " no apruebas " + ramo1;//y le agregamos un mensaje nuevo que nos advierte que el ramo no esta aprobado 
}else{//Si de lo contrario el promedio es mayor que la aporbacion entonces 
    menssProm = document.getElementById("menssProm");
    menssProm.innerHTML = "Tu nota es " + promedioR1 + " si apruebas " + ramo1;//Aqui el mensaje sera diferente, nos advertira que el ramo si esta aprobado 
}


//Con este condicional sabremos si se paso o no el ramo 2
if(promedioR2 < notaApr12){//Compararemos si es que el promedio es mas bajo que la nota de aprobacion entonces 
    menssProm = document.getElementById("menssProm2");//buscamos el elemento con el id de "menssProm"
    menssProm.innerHTML = "Tu nota es " + promedioR2 + " no apruebas " + ramo2;//y le agregamos un mensaje nuevo que nos advierte que el ramo no esta aprobado 
}else{//Si de lo contrario el promedio es mayor que la aporbacion entonces 
    menssProm = document.getElementById("menssProm2");
    menssProm.innerHTML = "Tu nota es " + promedioR2 + " si apruebas " + ramo2;//Aqui el mensaje sera diferente, nos advertira que el ramo si esta aprobado 
}


//Aqui mostramos la nota que se deberia sacar el alumno en la tercera prueba del tercer ramo para poder pasarselo 
menssProm = document.getElementById("menssProm3");
menssProm.innerHTML = "Necesitas un " + promedioR3 + " para aprobar " + ramo3;



