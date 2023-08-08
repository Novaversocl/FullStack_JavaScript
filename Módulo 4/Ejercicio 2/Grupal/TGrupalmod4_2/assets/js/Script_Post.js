// Array de nombres

// Crear un elemento <p> y asignarlo a la variable "loadingText"
var loadingText = document.createElement("p");

// Agregar el texto "Cargando..." al elemento <p> creado anteriormente
loadingText.textContent = "Cargando...";

// Agregar el elemento <p> con el texto "Cargando..." al div de comentarios en la página
document.querySelector("#comments").appendChild(loadingText);

// Definir una función llamada "getRandomDate" que devuelve una fecha y hora aleatoria
function getRandomDate() {
  // Definir la fecha de inicio
  var start = new Date(2023, 5, 1);

  // Definir la fecha final como la fecha y hora actual
  var end = new Date();

  // Calcular una fecha aleatoria entre la fecha de inicio y final
  var randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  // Devolver la fecha aleatoria como una cadena de texto formateada con "toLocaleString()"
  return randomDate.toLocaleString();
}

// Ejecutar la siguiente función después de 2 segundos (simulando una carga de comentarios)
setTimeout(function () {
  // Eliminar el texto de "Cargando..." del div de comentarios
  loadingText.remove();
  document.querySelector(".loader").remove();
  // Eliminar el elemento con la clase "loader"
  //   document.querySelector('.loader').remove();

  // Obtener el div de comentarios en la página
  var commentsContainer = document.querySelector("#comments");

  // Crear  tarjetas de comentarios y agregarlas al div de comentarios
  for (var i = 1; i <= 10; i++) {
    // Crear un elemento <div> y agregar la clase "card" para crear una tarjeta
    var card = document.createElement("div");
    card.classList.add("card");

    // Crear un elemento <h3> con el texto "Anónimo" seguido del número de la iteración actual
    var heading = document.createElement("h3");
    // Array de apellidos

    var apellidos = [
      "Brito",
      "Gómez",
      "Pérez",
      "Martínez",
      "Hernández",
      "García",
      "López",
      "Díaz",
      "González",
      "Rodríguez",
      "Fernández",
    ];
    var nombres = [
      "Alan",
      "Juan",
      "María",
      "Pedro",
      "Ana",
      "Carlos",
      "Laura",
      "Sofía",
      "José",
      "Luis",
      "Mónica",
    ];

    // Array de opciones de felicitaciones o buenos productos
    const opciones = [
        "Siempre me atienden con una sonrisa en la cara",
        "Los productos son de excelente calidad",
        "El servicio al cliente es impecable",
        "Siempre encuentro lo que busco",
        "Los precios son muy competitivos",
        "El personal siempre está dispuesto a ayudar",
        "Me encanta la variedad de productos que ofrecen",
        "Los envíos son rápidos y seguros",
        "Nunca he tenido un problema con mis compras",
        "La calidad de los productos supera mis expectativas",
        "Siempre me dan buenas recomendaciones",
        "El sitio web es fácil de usar y ordenado",
        "La tienda siempre está limpia y organizada",
        "Los productos tienen una buena relación calidad-precio",
        "Me gusta la atención personalizada que recibo",
        "Los productos siempre llegan en perfecto estado",
        "Me siento muy satisfecho con mis compras",
        "El servicio post-venta es excelente",
        "Me encanta la forma en que manejan los reclamos",
        "Los productos son duraderos y de calidad",
        "Siempre me dan información clara y precisa sobre los productos",
        "Me gusta la innovación en los productos que ofrecen",
        "La empresa se preocupa por el medio ambiente",
        "Siempre están en constante actualización y mejora",
        "Me encanta la política de devoluciones",
        "La experiencia de compra es muy agradable",
        "Siempre me hacen sentir como un cliente especial",
        "Me gusta la transparencia en los precios y promociones",
        "La empresa es confiable y seria",
        "Siempre hay ofertas y promociones interesantes",
        "Me gusta la calidad de los materiales de los productos",
        "Los productos cumplen con lo que prometen",
        "Me gusta la responsabilidad social de la empresa",
        "La empresa siempre está en la vanguardia de las tendencias",
        "Me gusta la facilidad de pago que ofrecen",
        "La empresa se preocupa por la satisfacción del cliente",
        "Me encanta la presentación de los productos",
        "Siempre puedo encontrar productos exclusivos",
        "Me gusta la flexibilidad en las formas de entrega",
        "La empresa es confiable y cumple con sus compromisos",
        "Me gusta la atención que brindan a los detalles",
        "Los productos tienen una excelente relación calidad-precio",
        "Me encanta la creatividad en los productos que ofrecen",
        "La empresa es innovadora y está en constante evolución",
        "Siempre me hacen sentir bienvenido como cliente",
        "Me gusta la transparencia en la información sobre los productos",
        "La empresa es responsable y ética",
        "Me encanta la rapidez en la entrega de los productos",
        "Siempre me dan opciones de productos que se ajustan a mis necesidades",
        "Me gusta la atención que brindan a la seguridad de los productos",
    ];

    // Función para seleccionar una opción aleatoria
    function textoAleatorio() {
      const indiceAleatorio = Math.floor(Math.random() * opciones.length);
      return opciones[indiceAleatorio];
    }

    // Ejemplo de uso
    console.log(textoAleatorio()); // muestra una opción aleatoria en la consola

    // Generar un índice aleatorio
    var randomIndex = Math.floor(Math.random() * nombres.length);
    var randomIndexApellido = Math.floor(Math.random() * apellidos.length);

    // Obtener el nombre aleatorio
    var nombreAleatorio = nombres[randomIndex];
    var apellidoAleatorio = apellidos[randomIndexApellido];

    // Mostrar el nombre en la consola
    console.log(nombreAleatorio);

    heading.textContent = nombreAleatorio + "_" + apellidoAleatorio;

    // Crear un elemento <img> y asignarle una imagen aleatoria de Unsplash
    var image = document.createElement("img");

    // Generar un número aleatorio entre 0 y 99
    var seed = Math.floor(Math.random() * 100);

    // Crear un elemento imagen
    var image = document.createElement("img");

    // Establecer la fuente de la imagen con la URL de RoboHash y el número aleatorio
    image.src = "https://robohash.org/" + seed + ".jpeg";

    // Agregar la imagen al cuerpo del documento HTML
    document.body.appendChild(image);

    // Agregar una clase "avatar" a la imagen para poder aplicarle estilos CSS
    image.classList.add("avatar");

    

    // Crear un elemento <p> con un texto de relleno
    var paragraph = document.createElement("p");
    paragraph.textContent =textoAleatorio(); // muestra una opción aleatoria en la consola

    // Crear un elemento <p> con una fecha aleatoria generada por la función "getRandomDate"
    var date = document.createElement("p");
    date.textContent = "Fecha: " + getRandomDate();

    // Crear un botón para agregar el comentario a favoritos
    var favoriteButton = document.createElement("button");
    favoriteButton.classList.add("btn", "btn-primary");
    favoriteButton.textContent = "Agregar a favoritos";

    // Agregar los elementos creados a la tarjeta
    card.appendChild(heading);
    card.appendChild(image);
    card.appendChild(paragraph);
    card.appendChild(date);
    card.appendChild(favoriteButton);

    // Agregar la tarjeta al div de comentarios en la página
    commentsContainer.appendChild(card);
    // document.querySelector('.loader').remove();
  }
}, 4000); // Esperar 2 segundos antes de ejecutar la función```
