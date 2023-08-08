import express from "express"; // Importamos el módulo 'express' para crear la aplicación
import { dirname } from "path"; // Importamos la función 'dirname' del módulo 'path' para obtener el directorio actual
import { fileURLToPath } from "url"; // Importamos la función 'fileURLToPath' del módulo 'url' para convertir una URL en una ruta de archivo
import { engine } from "express-handlebars"; // Importamos el motor de plantillas 'express-handlebars'

const app = express(); // Creamos una nueva aplicación express
const PORT = 3000; // Puerto en el que la aplicación escuchará las solicitudes

app.use(express.static("public")); // Middleware para servir archivos estáticos desde la carpeta 'public'

const __dirname = dirname(fileURLToPath(import.meta.url)); // Obtenemos el directorio actual utilizando las funciones importadas

app.engine("handlebars", engine()); // Configuramos el motor de plantillas 'express-handlebars' con el nombre 'handlebars'

app.set("views", `${__dirname}/views`); // Establecemos el directorio de vistas
app.set("view engine", "hbs"); // Establecemos el motor de plantillas a 'hbs'

// Ruta para las tareas pendientes
app.get("/tareas", (req, res) => {
  const title = "Tareas Pendientes"; // Título de la página
  const tareas = [ // Arreglo de tareas pendientes
    // Datos de ejemplo
    { id: 1, titulo: "Reunión de planificación del sprint" },
    { id: 2, titulo: "Desarrollo de la funcionalidad 2.0" },
    { id: 3, titulo: "Pruebas unitarias de la funcionalidad" },
    { id: 4, titulo: "Revisión y corrección de errores" },
    { id: 5, titulo: "Elaboración de la documentación del sprint" },
    { id: 6, titulo: "Implementación de mejoras en la interfaz de usuario" },
    { id: 7, titulo: "Actualización de dependencias del proyecto" },
    { id: 8, titulo: "Revisión del código por pares" },
    { id: 9, titulo: "Preparación y ejecución de pruebas de aceptación" },
    { id: 10, titulo: "Demostración del sprint ante el equipo" },
  ];
  res.render("tareas", { tareas, title }); // Renderizamos la vista 'tareas' y pasamos los datos
});

// Ruta para las tareas realizadas
app.get("/realizadas", (req, res) => {
  const title = "Tareas Realizadas"; // Título de la página
  const tareas = [ // Arreglo de tareas realizadas
    // Datos de ejemplo
    { id: 1, titulo: "Completar el informe de ventas" },
    { id: 2, titulo: "Enviar el correo de seguimiento a los clientes" },
    { id: 3, titulo: "Realizar la presentación del proyecto" },
    { id: 4, titulo: "Actualizar la base de datos" },
    { id: 5, titulo: "Resolver el problema de rendimiento del sistema" },
    { id: 6, titulo: "Crear el diseño de la interfaz de usuario" },
    { id: 7, titulo: "Implementar la lógica de negocio" },
    { id: 8, titulo: "Realizar pruebas de aceptación" },
    { id: 9, titulo: "Optimizar el código del proyecto" },
    { id: 10, titulo: "Documentar el proceso de desarrollo" },
  ];
  res.render("realizadas", { tareas, title }); // Renderizamos la vista 'realizadas' y pasamos los datos
});

// Ruta para las instalaciones
app.get("/hbs", (req, res) => {
  const title = "Instalaciones"; // Título de la página
  const tareas = [ // Arreglo de instalaciones
    // Datos de ejemplo
    { id: 1, titulo: "express" },
    { id: 2, titulo: "hbs" },
    { id: 3, titulo: "express-handlebars" },
    { id: 4, titulo: "handlebars" },
  ];
  res.render("instalaciones", { tareas, title }); // Renderizamos la vista 'instalaciones' y pasamos los datos
});

app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`)); // Iniciamos el servidor y mostramos un mensaje en la consola
