const axios = require("axios");
const fs = require('fs');
const http = require('http');
const url = require("url");

http
  .createServer((req, res) => {

    if(req.url.includes('/gastos')){

      fs.readFile("index.html", "utf8", (err, data) => {
        const params = url.parse(req.url, true).query; // Obtener los parámetros de la URL

        let nameUser = params.selectName;
        let typeCost = params.typeCost; 
        let amount = params.amount;

        let arrayC = {"name" : nameUser, "typeCost": typeCost ,"amount": amount }
        addCost(arrayC)

        res.write(`
        <script>
            setTimeout(function() {
              window.location.href = "http://localhost:8080/";
            }, 400);
        </script>
    `);

      });

    }

    if (req.url.includes('/')) {
      // Ruta raíz, sirve el archivo index.html
      res.writeHead(200, { "Content-Type": "text/html" });

      fs.readFile("index.html", "utf8", (err, data) => {
        
        let jsonn = getJSON();

        let jsonnH = getCostJSON();

        let table = `
        <table>
          <tr>
            <th>Name</th>
            <th>Must</th>
            <th>Receive</th>
          </tr>
      `;

      let select = `
      <select class="custom-select inputbox" name="selectName">
        
      `;
      let tablehistory = `
      <table>
        <tr>
          <th>Name</th>
          <th>Must</th>
          <th>Receive</th>
          <th>Edit</th>
          <th>Del</th>
        </tr>
    `;


        let contTable = "";
        let contOptionName = "";
        let contHistory = "";

        //Funcion para iterar el json costs
        for (let i = 0; i < jsonnH.Costs.length; i++) {
          let nameUser = jsonnH.Costs[i].name;
          let tyCost = jsonnH.Costs[i].typeCost;
          let amou = jsonnH.Costs[i].amount;
           
          contHistory = `
          <tr>
            <td>${nameUser}</td>
            <td>${tyCost}</td>
            <td>${amou}</td>
            <td><button>+</button></td>
            <td><button>-</button></td>
          </tr>
          
          `

          tablehistory += contHistory;


        }

        //Funcion para iterar el json roommates
        for (let i = 0; i < jsonn.Users.length; i++) {
          let name = jsonn.Users[i].name;
          let mus = jsonn.Users[i].must;
          let recv = jsonn.Users[i].receive;

          contTable = `
          <tr>
            <td>${name}</td>
            <td>${mus}</td>
            <td>${recv}</td>
          </tr>
          `; 

          contOptionName = `
          <option >${name}</option>
          `;

          select += contOptionName;

          table += contTable;
        }

        tablehistory += '</table>'

        table += '</table>';

        select += '</select>';


        const addTable = data.replace('<h1>Hola</h1>', table);
        const addSelect = addTable.replace('<h1>Opciones</h1>', select);
        const addTableH = addSelect.replace('<h1>Tabla historial</h1>', tablehistory)
        res.end(addTableH);
   
      });

    } else {
      // Ruta no válida
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 No encontrado');
    }

    if (req.url === "/estilos") {
      const cssContent = fs.readFileSync("style.css", "utf8");
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(cssContent);
    }

    if(req.url === '/agregar'){

      newUserJSON();
      
      res.write(`
      <h1>Guardando json...</h1>
        <script>
            setTimeout(function() {
              window.location.href = "http://localhost:8080/";
            }, 400);
        </script>
    `);
    res.end();   
    }

  })
  .listen(8080, () => console.log("servidor encendido"));


// ~ Funcion para obtener datos de la API  
async function getData(url) {
  try {
    let { data } = await axios.get(url);
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    const name = firstName + " " + lastName;
    return name;
  } catch (error) {
    console.log(error);
  }
}

// & Funcion para crear un numero random negativo
function must() {
  var numeroAleatorio = Math.floor(Math.random() * -1 * 10000);
  return numeroAleatorio;
}

// & Funcion para crear un numero random negativo
function receives() {
  var numeroAleatorio = Math.floor(Math.random() * 10000) + 1;
  return numeroAleatorio;
}

// & Funcion para agregar el nuevo usuario al JSON roommates.json
async function newUserJSON() {
    try {
      const name = await getData("https://randomuser.me/api");
      let recv = receives();
      let mus = must();

      let array = {"name" : name, "must": mus ,"receive": recv }
      addUser(array)
      
    } catch (error) {
      console.log(error); 
    }
}


  
// & Funcion para obtener el JSON roommates.json
function getJSON() {
    const data = fs.readFileSync("roommates.json", "utf8", (err) => {
      if (err) throw err;
    });
    return JSON.parse(data);
}

// * Funcion para obtener el JSON costs.json
function getCostJSON() {
    const data = fs.readFileSync("costs.json", "utf8", (err) => {
      if (err) throw err;
    });
    return JSON.parse(data);
}



// & Funcion para guardar el nuevo usuario en el JSON roommates.json
function saveUser(user) {
  const jsonData = JSON.stringify(user, null, 2);
  fs.writeFileSync("roommates.json", jsonData, "utf8");
  console.log("JSON guardado correctamente");
}

//* Funcion para guardar el nuevo gasto en el JSON costs.json
function saveCost(cost) {
  const jsonData = JSON.stringify(cost, null, 2);
  fs.writeFileSync("costs.json", jsonData, "utf8");
  console.log("JSON guardado correctamente");
}

// & Funcion para añadir el usuario en el JSON roommates.json
function addUser(user) {
    const users = getJSON();
    users.Users.push(user);
    saveUser(users);
    console.log("Usuario agregado a la lista", users);
} 

// * Funcion para añadir el gasto en el JSON costs.json
function addCost(cost) {
  const costs = getCostJSON();
  costs.Costs.push(cost);
  saveCost(costs);
  console.log("Usuario agregado a la lista", costs);
} 
