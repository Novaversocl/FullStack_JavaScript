async function getDataFromAPI() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (typeof data !== 'object' || data === null) {
            throw new Error('La respuesta de la API no es un objeto válido.');
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


function addOnSelect() {
    getDataFromAPI()
        .then(data => {
            sortByIdString(data);
            const selectCategorias = document.getElementById('categorias');
            selectCategorias.innerHTML = '';
            for (let key in data.categories) {
                if (data.categories.hasOwnProperty(key)) {
                    const category = data.categories[key];

                    const id = category.idCategory;
                    const name = category.strCategory;

                    const option = document.createElement('option');
                    option.value = id + 1;
                    option.textContent = name;
                    selectCategorias.appendChild(option);
                }
            }

            selectCategorias.addEventListener('change', () => {
                const selectedIndex = selectCategorias.selectedIndex;
                const selectedCategory = data.categories[selectedIndex];

                //Llamamos al elemento contenedor en una variable 
                const cardCont = document.getElementById('resultado');
                //Lo limpiamos 
                cardCont.innerHTML = ''; 

                //Creamos una variable para llamar a la funcion que crea las cards y le pasamos 
                //la categoria que este seleccionada en el select 
                const card = crearCardsSeleccionado(selectedCategory);
                //Luego lo agregamos al contenedor de las cards
                cardCont.appendChild(card);
            });

        })
        .catch(error => {
            console.error('Error:', error);
        });
}

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

    console.log('Recetas ordenadas por categoría:');
    data.categories.forEach(category => {
        console.log(category.strCategory);
    });
}

//Funcion para crear la estructura html de cada card  
function crearCardsSeleccionado(selectedCategory) {
    //Crear un elemento div para representar la card
    const card = document.createElement('div');
    //Creamos las clases para la card
    card.classList.add('card', 'col-6', 'col-md-4', 'col-lg-3', 'mx-auto');

    //Crear un elemento p para mostrar el ID de la categoría
    const id = document.createElement('p');
    //agregamos el id al parrafo
    id.textContent = `ID: ${selectedCategory.idCategory}`;
    //agregamos la id a la card
    card.appendChild(id);

    //Crear un elemento h3 para mostrar el nombre de la categoría 
    const name = document.createElement('h3');
    //agregamos el nombre al titulo
    name.textContent = selectedCategory.strCategory;
    //agregamos el titulo a la card
    card.appendChild(name);

    //Crear un elemento img para mostrar la imagen de la categoría 
    const thumb = document.createElement('img');
    //agregamos la direccion de la imagen
    thumb.src = selectedCategory.strCategoryThumb;
    //agregamos la imagen a la card
    card.appendChild(thumb);

    //Crear un elemento p para mostrar la descripción de la categoría
    const description = document.createElement('p');
    //agregamos el texto de la descripcion
    description.textContent = selectedCategory.strCategoryDescription;
    //agregamos la descripcion a la card
    card.appendChild(description);

    //retornamos la card
    return card
}

//Funcion para filtrar los nombres segun el texto que escribe el usuario
function searchLetters() {
    getDataFromAPI()//obtenemos los datos con la funcion
        .then(data => {
            //Obtenemos el elemento de input del html
            const searchInput = document.getElementById('searchInput');
            //obtenemos el elemento de boton del html
            const searchButton = document.getElementById('searchButton');
            //Obtenenmos el elemento de contenedor div del html
            const cardCont = document.getElementById('resultado');

            //Creamos un evento que escucha cuando se hace un clic en el boton de buscar 
            searchButton.addEventListener('click', () => {
                //Obtenemos el término de búsqueda y eliminamos los espacios en blanco al inicio y final   
                const searchTerm = searchInput.value.trim(); 

                //Filtramos las categorias segun el texto del input
                //revisa si es que el valor contenido en strCategory es igual al 
                //valor contenido en searchTerm el nombre a buscar
                const filteredRecipes = data.categories.filter(category =>
                    category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
                );

                //Limpiamos el contenedor de las cards 
                cardCont.innerHTML = ''; 
                
                //Condicional que revisa si es que el valor filtrado es mayor o no a 0
                if (filteredRecipes.length > 0) {
                    //si es mayor llama a la funcion y le pasa los datos filtrados por el nombre
                    createCards(filteredRecipes);
                } else {
                    //Si es menor, osea que no existe en los datos salta una alerta
                    alert('No se encontraron recetas con el término de búsqueda especificado');
                }


            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

//Funcion para crear las cards segun la busqueda 
function createCards(categories) {
    //Creamos el contenedor de las cards con un elemento del html
    const cardCont = document.getElementById('resultado');
    //Lo limpiamos
    cardCont.innerHTML = ''; 

    //recorremos los datos que se entregaron 
    categories.forEach(category => {
        //creamos una variable llamada card para llamar a la funcion que nos crea la card
        const card = crearCardsSeleccionado(category);
        //agregamos la card al contenedor de las cards
        cardCont.appendChild(card);
    });
}

//Funcion que permite ver todas las cards de cada receta 
function showAllCards() {
    getDataFromAPI()
        .then(data => {
            //Tomamos el elemento boton para ver todas las cards del html
            const buttonShow = document.getElementById('showAllButton');

            //Creamos un evento el cual escucha cuando se haga click en el boton 
            buttonShow.addEventListener('click', () => {
                //cuando pasa esto, se llama a la funcion que crea las cards con todos los datos 
                createCards(data.categories);
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

//Llamamos a las funciones
showAllCards()
searchLetters()
addOnSelect();