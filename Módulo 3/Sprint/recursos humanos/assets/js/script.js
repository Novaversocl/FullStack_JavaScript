var selectElement = document.getElementById('pregunta1');
// var pregunta2 = document.getElementById('pregunta2');

// Establecer el valor predeterminado en "Seleccionar"
selectElement.value = "";
selectElement.addEventListener('change', function() {
  // Obtener la opción "Seleccionar"
  var selectOption = document.querySelector("#mi-select option[value='']");
  if (selectElement.value === 'si') {
    //si seleciono el si haga esto
    fechaIngreso.disabled = false;
    sueldoactual.disabled = false;
    sueldoanterior.disabled = false;
    pregunta3.disabled=false;
    pregunta4.disabled = false;




  } else {

    //de lo contrario 
    fechaIngreso.disabled = true;
    sueldoactual.disabled = true;
    sueldoanterior.disabled = true;
    pregunta3.disabled = true;
    pregunta4.disabled=true;


    //Limpiar
    fechaIngreso.value="";
    sueldoactual.value="";
    sueldoanterior.value="";
    pregunta3.value="";
    pregunta4.value="";


  }
  // Verificar si la opción "Seleccionar" aún existe en el DOM antes de eliminarla
  if (selectOption !== null) {
    selectOption.parentNode.removeChild(selectOption);
  }
});