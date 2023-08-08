import axios from "axios";

// Obtener un personaje aleatorio de la API de Pokemom
async function getRandomPoke() {
    try {
      // Realizar solicitud a la PokeAPI 
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

      // Obtener un personaje aleatorio de la lista de personajes
      const randomPoke = response.data.results[Math.floor(Math.random() * response.data.results.length)];

      // Extraer los datos necesarios del personaje
      // NO TIENE ID, SOLO NAME Y URL
      
      const pokemonResponse = await axios.get(randomPoke.url);
      
      const { id, name } = pokemonResponse.data;
      
      // Devolver un objeto con los datos del personaje
      return { id, name, url: randomPoke.url };

      //Mensaje de error que pasa por el catch
    } catch (error) {
      console.error('Error al obtener el nombre del pokemon:', error);
      throw error;
    }
  }

  // Exportar la funcion getEandomPoke
export default getRandomPoke;