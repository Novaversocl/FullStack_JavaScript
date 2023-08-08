function soloNumeros(event) {
    // Obtener el código del caracter de la tecla presionada
    var charCode = event.charCode;
    // Verificar si el código del caracter no es un número
    console.log(charCode)
    if (charCode < 48 || charCode > 57) {
      // Cancelar el evento para que el carácter no se ingrese en el campo de entrada
      event.preventDefault();
    }
  }

/* Listado de charcode
0: 48
1: 49
2: 50
3: 51
4: 52
5: 53
6: 54
7: 55
8: 56
9: 57
 */

