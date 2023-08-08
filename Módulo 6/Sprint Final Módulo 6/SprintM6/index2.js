const axios = require("axios");
const fs = require('fs');
const http = require('http');


http
  .createServer((req, res) => {


    if (req.url == "/xsddsd") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", "utf8", (err, data) => {
      res.end(data);
    });
  }
  if (req.url == "/estilos") {
    res.writeHead(200, { "Content-Type": "text/css" });
    fs.readFile("style.css", (err, css) => {
      res.end(css);
    });
  }
  })
  .listen(3000, () => console.log("servidor encendido"));

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

function must() {
  var numeroAleatorio = Math.floor(Math.random() * -1 * 10000);
  return numeroAleatorio;
}

function receives() {
  var numeroAleatorio = Math.floor(Math.random() * 10000) + 1;
  return numeroAleatorio;
}

async function obtenerNombre() {
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
  
//obtenerNombre() 

function getJSON() {
    const data = fs.readFileSync("roommates.json", "utf8", (err) => {
      if (err) throw err;
    });
    return JSON.parse(data);
}

function saveUser(user) {
  const jsonData = JSON.stringify(user, null, 2);
  fs.writeFileSync("roommates.json", jsonData, "utf8");
}

function addUser(user) {
    const users = getJSON();
    users.Users.push(user);
    saveUser(users);
    console.log("Usuario agregado a la lista", users);
} 
