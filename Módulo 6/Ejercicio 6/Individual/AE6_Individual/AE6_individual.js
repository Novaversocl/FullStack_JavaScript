const yargs = require("yargs");

//Definir el comando

yargs.command({
  command: "adulto",
  describe: "",
  builder: {
    edad: {
      describe: "Evaluacion de edad para determinar si es mayor",
      demand: true,
      type: "number",
    },
  },
  handler: function (argv) {
    const edadMinima = 18;
    const edadEvaluada = argv.edad;
    if (edadEvaluada >= edadMinima) {
      console.log("Mayor de edad");
    } else {
      console.log("Menor de edad");
    }
  },
});
yargs.parse();