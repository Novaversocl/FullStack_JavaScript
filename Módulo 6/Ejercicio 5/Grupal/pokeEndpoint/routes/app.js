const axios = require("axios");
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
let pokCount = 0;
const pokM = 150;
const pokemonData = [];
async function getData(url) {
    try{
        let { data } = await axios.get(url);
        
        

        const results = data.results; // Accede a la matriz 'results' dentro de la variable 'data'
        for (let i = 0; i < results.length; i++) {
            const pokemon = results[i];

            //console.log("Nombre", pokemon.name); // Accede al valor de la propiedad 'name' de cada objeto 'pokemon'
            let namep = pokemon.name

            const pokemonResponse = await axios.get(pokemon.url);

            //console.log("imagen", pokemonResponse.data.sprites.back_default);
            let imagenpU = pokemonResponse.data.sprites.front_default

            pokCount++;

            pokemonData.push({ namep, imagenpU });
            //console.log(pokemonData);
        }

        const nextUrl = data.next;
        if (pokCount < pokM) {
          await getData(nextUrl);
        }

    }catch(error){
        console.log(error);
    }
}

app.get('/', async (req, res) => {
  
    if (pokemonData.length === 0) {
      
      await getData("https://pokeapi.co/api/v2/pokemon")
           .then(() => {
               generateHTMLAndSendResponse(res);
               generateJSON();
            });
   
    } else {
        generateHTMLAndSendResponse(res);
    }
});

function generateJSON() {
  const jsonData = JSON.stringify(pokemonData, null, 2); // Convierte el arreglo de datos en una cadena JSON formateada

  fs.writeFile('pokemon.json', jsonData, 'utf8', err => {
    if (err) {
      console.error('Error al escribir el archivo JSON', err);
    } else {
      console.log('Archivo JSON creado exitosamente');
      console.log(pokemonData);
    }
  });
}

function generateHTMLAndSendResponse(res) {
  const htmlPath = path.join(__dirname, 'index.html');

  const htmlContent = `
  <html>
    <head>
      <title>Pokémon</title>
      <style>
      .pokemon-list {
        display: flex;
        flex-wrap: wrap;
      }
      .pokemon-item {
        margin-right: 10px;
      }
    </style>
    </head>
    <body>
      <h1>Pokémon List</h1>
      <div class="pokemon-list">
        ${pokemonData.map(pokemon => `<p class="pokemon-item">${pokemon.namep}</p> <img src="${pokemon.imagenpU}">`).join('')}
      </div>
      
    </body>
  </html>
`;

  fs.writeFile(htmlPath, htmlContent, err => {
      if (err) {
          console.error('Error al crear el archivo HTML', err);
          res.sendStatus(500);
      } else {
          res.sendFile(htmlPath);
      }
  });
}


app.listen(PORT, () =>{
    console.log(`Escuchando el puerto ${PORT}`);
});