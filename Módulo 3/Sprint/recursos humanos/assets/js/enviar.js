
//Creamos las variables
let nombre = document.getElementById("nombre")
let apellidos = document.getElementById("apellidos")
let fechaNacimiento = document.getElementById("fechadenacimiento")

let estadoT = document.getElementById("pregunta1")
let estadosi = document.getElementById("sies")
let estadono = document.getElementById("noes")

let fechaIngreso = document.getElementById("pregunta2")

let sueldoActual = document.getElementById("sueldoactual")
let sueldoAnterior = document.getElementById("sueldoanterior")
let cargas = document.getElementById("pregunta3")
let cantidadCargas = document.getElementById("pregunta4")


document.getElementById("enviar").addEventListener("click", function (event) { //Se crea un evento donde se puede interactuar con los items a continuacion
  event.preventDefault(); // evita que se envíe el formulario
  nombree = nombre.value;
  apellidoss = apellidos.value;
  fechaaN = fechaNacimiento.value;
  actualsueldo = sueldoActual.value;
  anteriorSueldo = sueldoAnterior.value;
  cargasSn = cargas.value;
  cargascantidad = cantidadCargas.value;
  estadoTrabajador = estadoT.value;

  fechaString = fechaIngreso.value;  //se da el valor de fecha al string, devolviendo un dato conm dia, mes y año
  fecha = new Date(fechaString);

  let arreglo = []  //se crea un arreglo1 que entrega un sueldo actual, sueldo anterior y numero de cargas
  arreglo = amoUnts(actualsueldo, anteriorSueldo, cargasSn)
  dates(fecha, fechaActual);

  let arreglo2 = [] //Se crea un arreglo2 que entrega valores de numeros enteros a los datos de cargas, el arreglo1 y sueldo actual
  arreglo2 = corresPondent(cargascantidad, parseInt(arreglo[0]), parseInt(actualsueldo));


  var datos = "Nombre: " + nombree + " " + apellidoss //Se crean las variables con su string + su respectivo valor en formato dado
    + "\n" + "Fecha de nacimiento: " + fechaaN 
    + "\n" + "Estado del trabajador: " + estadoTrabajador 
    + "\n" + "Fecha de ingreso a la organizacion: " + fechaString 
    + "\n" + "Sueldo del semestre anterior: " + anteriorSueldo
    + "\n" + "Tiene cargas familiares: " + cargasSn
    + "\n" + "Cantidad de cargas que posee: " + cargascantidad
    + "\n" + "Monto de la carga familiar: " + arreglo[0]
    + "\n" + "Sueldo total: " + arreglo2[1];

  alert(datos); //se crea una alerta que devuelve los datos de las variables creadas.
});