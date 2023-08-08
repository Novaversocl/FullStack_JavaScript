const yargs = require("yargs");
const child = require("child_process");
const user = "admin";
const pass = "123";
yargs
  .command(
    "login",
    "",
    {
      key: { describe: "Password", demand: true, alias: "P" }
      
    },
    (args) => {
      args.key == pass 
        ? child.exec("node index.js", (err, stdout) => {
            err ? console.log(err) : console.log(stdout);
          })
        : console.log("Credenciales incorrectas");
    }
  )
  .help().argv;