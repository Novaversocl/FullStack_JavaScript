function obtenerAlmuerzos() {
  fetch('almuerzos_archivo.json')
    .then(response => response.json())
    .then(data => {
      // Mostrar los almuerzos en la consola
      data.almuerzos.forEach(almuerzo => {
        console.log(`${almuerzo.nombre}: ${almuerzo.precio}`);
      });

      // Generar el HTML de la tabla de almuerzos
      const tablaHTML = generarTablaHTML(data.almuerzos);

      // Mostrar la tabla en el HTML
      const almuerzosCuerpo = document.getElementById('almuerzos-cuerpo');
      almuerzosCuerpo.innerHTML = tablaHTML;
    })
    .catch(error => {
      console.log('Error al obtener los almuerzos:', error);
    });
}

// Generar el HTML de la tabla de almuerzos
function generarTablaHTML(almuerzos) {
  let tablaHTML = '';

  // Generar las filas de la tabla
  almuerzos.forEach(almuerzo => {
    const filaHTML = `<tr><td>${almuerzo.nombre}</td><td>${almuerzo.precio}</td></tr>`;
    tablaHTML += filaHTML;
  });

  return tablaHTML;
}


 obtenerAlmuerzos()