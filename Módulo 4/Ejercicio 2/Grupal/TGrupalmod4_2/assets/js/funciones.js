//Variables
let search = document.getElementById("search1");
var formularioBusqueda = document.getElementById('formularioBusqueda');
//Cuando carga la pagina elimina los caracteres de este campo
search.value = "";

//Funcion para poder revisar si es que solo son letras
function onlyLettSpaces(event) {

  
  // la propiedad "charCode" se puede utilizar en JavaScript 
  // para determinar qué carácter se presionó en un evento de teclado y realizar acciones en consecuencia.

  var charCode = event.charCode;
  console.log(charCode)
  // Obtener el código del caracter de la tecla presionada

  // Verificar si el código del caracter no es un número
  if ((charCode > 64 && charCode < 91) || // letras mayúsculas
    (charCode > 96 && charCode < 123)||// letras minúsculas
    (charCode == 32)){ //Espacios en blanco
    // Permitir el ingreso del carácter
  } else {
    event.preventDefault(); // Cancelar el evento para que el carácter no se ingrese en el campo de entrada
  }
}

//funciones para validar si el campo esta vacio ''
function validateEmpty(f0rm, sch) {
  f0rm.addEventListener('submit', function (event) {
    // Verificar si el campo está vacío
    if (sch.value === '') {
      alert('El campo de nombre no puede estar vacío');
      event.preventDefault();
    };
  });
}


//enviar los valores por parametro a la funcion
validateEmpty(formularioBusqueda, search)



//grupo3










