// Función para validar el nombre y apellido
function validarNombreApellido(nombre, apellido) {
  // Verificar si el nombre o el apellido están vacíos o contienen caracteres no permitidos
  if (
    nombre.trim() === "" || // Verificar si el nombre está vacío después de eliminar los espacios en blanco
    apellido.trim() === "" || // Verificar si el apellido está vacío después de eliminar los espacios en blanco
    ![...nombre.trim()].every((char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 122) || // Verificar si todos los caracteres del nombre son letras (códigos ASCII entre 65 y 122)
    ![...apellido.trim()].every((char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 122) // Verificar si todos los caracteres del apellido son letras (códigos ASCII entre 65 y 122)
  ) {
    
    return false; // Devolver falso si alguna de las condiciones de validación no se cumple
  } else {
    
    return true; // Devolver verdadero si todas las condiciones de validación se cumplen
  }
}

function mostrarAlerta() {
  alert('¡Esto es una alerta!');
}


// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = {
  validarNombreApellido,mostrarAlerta
};


