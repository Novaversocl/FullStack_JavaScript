const data = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
  ];
  
  const showPokemonButton = document.querySelector("#showPokemonButton");
  const pokemonListElement = document.querySelector("#pokemonList");
  
  const sortData = (pokemonData, sortBy, callback) => {
    setTimeout(() => {
      const sortedData = pokemonData.sort((a, b) => {
        if (sortBy === "id") {
          return a.id - b.id;
        } else if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
      });
  
      callback(sortedData);
    }, 1000); // Retraso de 1 segundo
  };
  
  const showPokemonList = () => {
    // Limpiar el contenido previo
    pokemonListElement.innerHTML = "";
  
    // Recorrer el arreglo de datos y construir el contenido
    data.forEach((pokemon) => {
      const pokemonItem = document.createElement("p");
      pokemonItem.textContent = `ID: ${pokemon.id} - Nombre: ${pokemon.name}`;
      pokemonListElement.appendChild(pokemonItem);
    });
  };
  
  showPokemonButton.addEventListener('click', showPokemonList);
  
  const searchButton = document.querySelector("#searchButton");
  const searchInput = document.querySelector("#searchInput");
  
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    searchPokemon(searchTerm);
  });
  
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value.trim();
      searchPokemon(searchTerm);
    }
  });
  
  const searchPokemon = (searchTerm) => {
    if (searchTerm === "") {
      console.log("Por favor, ingresa un término de búsqueda.");
      return;
    }
  
    sortData(data, "id", (sortedData) => {
      const pokemon = sortedData.find(
        (pokemon) =>
          pokemon.name.toLowerCase() === searchTerm.toLowerCase() ||
          pokemon.id.toString() === searchTerm
      );
  
      if (pokemon) {
        console.log("Pokémon encontrado:");
        console.log("ID:", pokemon.id);
        console.log("Nombre:", pokemon.name);
        console.log("Tipos:", pokemon.types.join(", "));
      } else {
        console.log("Pokémon no encontrado.");
      }
    });
  };
  