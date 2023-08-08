
import express from "express";
import getRandomPoke from "./appPoke.js";

const app = express();
const PORT = 3000;

app.get("/ramdom-poke", async (req, res) => {
    try {
      const poke = await getRandomPoke();
      res.json(poke);
    } catch(error) {
      res.status(500).json({error: 'Error al obtener el nombre del pokemon'});
    }
});

app.listen(PORT, () => {
    console.log('Escuchando el puerto $(PORT)');
});



