const fs = require("fs");

//Funcion para obtener lista de almuerzos
function getAlmuerzos() {
  const data = fs.readFileSync("almuerzos_archivo.json", "utf8", (err) => {
    if (err) throw err;
  });
  return JSON.parse(data);
}

//Funcion para guardar la lista de almuerzos en el archivo
function saveAlmuerzos(almuerzos) {
  /*El segundo argumento null indica que no se utilizará una funció9n de reemplazo para
  transformar los valores  y el tercer argumento 2 especifica el número de espacios de 
  identación para formatear  la cadena JSON. */
  const jsonData = JSON.stringify(almuerzos, null, 2);
  fs.writeFileSync("almuerzos_archivo.json", jsonData, "utf8");
}

//Funcion para agregar un nuevo almuerzo
function addAlmuerzo(almuerzo) {

  const almuerzos = getAlmuerzos();

  //almuerzos: indica el nombre del archivo, la ruta y que lo lea
  //almuerzo.push : agrega un "almuerzo" al array del json
  almuerzos.almuerzos.push(almuerzo);
  saveAlmuerzos(almuerzos);
  console.log("Almuerzo agregado a la lista", almuerzos);
}

//Ejemplo de Uso

const newAlmuerzo = {
  nombre: "Papas Fritas con Bistec",
  precio: 6500,
};

addAlmuerzo(newAlmuerzo);
const almuerzos = getAlmuerzos();

function eliminarAlmuerzopornombre(nombreAlmuerzo) {
  const almuerzos = getAlmuerzos(); // Obtiene la lista de almuerzos

  // Verificar si hay almuerzos en la lista
  if (almuerzos.almuerzos.length > 0) {
    const indiceAlmuerzo = almuerzos.almuerzos.findIndex(
      (almuerzo) => almuerzo.nombre === nombreAlmuerzo
    ); // Encuentra el índice del almuerzo a eliminar en base al nombre

    if (indiceAlmuerzo !== -1) {
      const almuerzoEliminado = almuerzos.almuerzos.splice(
        indiceAlmuerzo,
        1
      )[0]; // Elimina el almuerzo de la lista y lo guarda en la variable almuerzoEliminado
      saveAlmuerzos(almuerzos); // Guarda la lista de almuerzos actualizada en el archivo
      console.log("Almuerzo eliminado:", almuerzoEliminado); // Muestra el almuerzo eliminado
    } else {
      console.log("El almuerzo no se encontró en la lista"); // Mensaje de error si no se encuentra el almuerzo
    }
  } else {
    console.log("No hay almuerzos en la lista"); // Mensaje de error si no hay almuerzos en la lista
  }
}







eliminarAlmuerzopornombre("Puré");
console.log("Listado actualizado de almuerzos", getAlmuerzos());
