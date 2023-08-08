//Funcion para obtener los datos de la API
async function getDataFromAPI() {
  //Creamos la variable para la direccion de la API
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  //Creamos el manejador de errores
  try {
    //Creamos la variable para guardar la respuesta que nos da la funcion fetch, esta funcion fetch nos
    //realiza la solicitud HTTP a la URL, con await obtenemos una promesa que espera hasta que se resuelva 
    //para pder continuar con el codigo.
    const response = await fetch(url);
    //Creamos la variable para guardar los datos de la respuesta anterior con una promesa tambien, la 
    //cual espera que la respuesta sea analizada con la funcion json() para asi obtener los datos del JSON de la API
    const data = await response.json();

    //Este condicional nos revisa si es que la variable data no es un objeto o esta nulo entonces 
    //nos tira un error con un mensaje 
    if (typeof data !== 'object' || data === null) {
      throw new Error('La respuesta de la API no es un objeto válido.');
    }

    //Retornamos los datos en JSON de la API
    return data;
    
    //Si es que ocurre algun error entonces nos mostrara el error en consola 
  } catch (error) {
    //Manejar el error
    console.error('Error:', error);
    throw error;
  }
}

//Esta funcion nos sirve para añadir los nombres de las recetas en el select del html 
function addOnSelect() {
  //Llamamos a la funcion para obtener los datos de la API  
  getDataFromAPI()
  //Aqui despues de que la promesa se haya cumplido en getDataFromAPI obtenemos los datos en data
    .then(data => {
      //Llamamos a la funcion para ordenar las recetas por sus nombres
      sortByIdString(data); 
      //llamamos al elemento select de html
      const selectCategorias = document.getElementById('categorias');
      //Lo dejamos en blanco
      selectCategorias.innerHTML = '';
      //Creamos un ciclo que recorra las categorias, osea cada elemento del data
      for (let key in data.categories) {
        //Con este condicional revisamos si key es una propiedad de data categories 
        //hasOwnProperty es para no obtener una categoria heredada solo del objeto
        if (data.categories.hasOwnProperty(key)) {
          //Creamos una variable para almacenar la categoria, osea la receta, key sera el indice
          const category = data.categories[key];

          //Acceder a las propiedades del objeto category
          //el id y el nombre de la receta
          const id = category.idCategory;
          const name = category.strCategory;

          //Crear una opción en el select
          //Tomamos el elemento del html
          const option = document.createElement('option');
          //le damos el valor de la id 
          option.value = id + 1;
          //y le damos el nombre al select 
          option.textContent = name;
          //agregamos el valor a option
          selectCategorias.appendChild(option);
        }
      }

      //Cuando haya un cambio 
      selectCategorias.addEventListener('change', () => {
        //Creamos una variable para seleccionar
        const selectedIndex = selectCategorias.selectedIndex;
        const selectedCategory = data.categories[selectedIndex];

        //Mostramos los datos en la consola
        console.log('Categoría seleccionada:');
        console.log('ID:', selectedCategory.idCategory);
        console.log('Nombre:', selectedCategory.strCategory);
        console.log('URL de imagen:', selectedCategory.strCategoryThumb);
        console.log('Descripción:', selectedCategory.strCategoryDescription);
      });

    })
    .catch(error => {
      //Manejar el error
      console.error('Error:', error);
    });
}

//Funcion para ordenar por datos 
function sortByIdString(data) {
  data.categories.sort((a, b) => {
    const categoryA = a.strCategory.toUpperCase();
    const categoryB = b.strCategory.toUpperCase();

    if (categoryA < categoryB) {
      return -1;
    }
    if (categoryA > categoryB) {
      return 1;
    }
    return 0;
  });

  //Mostrar las recetas ordenadas por categoría en la consola
  console.log('Recetas ordenadas por categoría:');
  data.categories.forEach(category => {
    console.log(category.strCategory);
  });
}

getDataFromAPI();
//sortByIdString();
addOnSelect();
