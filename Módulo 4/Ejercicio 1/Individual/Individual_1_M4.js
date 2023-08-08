// Definir la clase Paciente
//pasamos por parametros los campos del paciente.
//"this" se utiliza para hacer referencia a ese objeto y acceder a sus atributos y métodos
class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
  }

  // Definir los getters y setters utilizando prototype
  //utilizamos "get" que es una palabra clave en JavaScript que se utiliza para definir un método getter en un objeto.
  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }

  get edad() {
    return this._edad;
  }
  set edad(valor) {
    this._edad = valor;
  }

  get rut() {
    return this._rut;
  }
  set rut(valor) {
    this._rut = valor;
  }

  get diagnostico() {
    return this._diagnostico;
  }
  set diagnostico(valor) {
    this._diagnostico = valor;
  }
}

// Definir la clase Consultorio
class Consultorio {
  constructor() {
    this._pacientes = [];
  }
}

// Método para agregar pacientes utilizando prototype
Consultorio.prototype.agregarPaciente = function(paciente) {
  this._pacientes.push(paciente);
};

// Método para buscar pacientes por nombre utilizando prototype
Consultorio.prototype.buscarPorNombre = function(nombre) {
  for (var i = 0; i < this._pacientes.length; i++) {
    if (this._pacientes[i].nombre === nombre) {
      return this._pacientes[i];
    }
  }
  return null;
};

// Método para mostrar todos los pacientes utilizando prototype
Consultorio.prototype.mostrarPacientes = function() {
  console.log("Pacientes registrados:");
  for (var i = 0; i < this._pacientes.length; i++) {
    console.log("Nombre: " + this._pacientes[i].nombre);
    console.log("Edad: " + this._pacientes[i].edad);
    console.log("RUT: " + this._pacientes[i].rut);
    console.log("Diagnóstico: " + this._pacientes[i].diagnostico);
  }
};

// Crear algunos pacientes
var paciente1 = new Paciente("Juan", 20, "12.345.678-7", "Alergia");
var paciente2 = new Paciente("Lisandra", 20, "11.111.111-1", "Fiebre");
var paciente3 = new Paciente("Francisca", 20, "22.222.222-2", "Tos");

// Crear un consultorio y agregar los pacientes
const consultorio = new Consultorio();
consultorio.agregarPaciente(paciente1);
consultorio.agregarPaciente(paciente2);
consultorio.agregarPaciente(paciente3);

// Mostrar todos los pacientes
consultorio.mostrarPacientes();

// Buscar un paciente por nombre y mostrar sus datos
const pacienteEncontrado = consultorio.buscarPorNombre("Juan");
if (pacienteEncontrado !== null) {
  console.log("Paciente encontrado:");
  console.log("Nombre: " + pacienteEncontrado.nombre);
  console.log("Edad: " + pacienteEncontrado.edad);
  console.log("RUT: " + pacienteEncontrado.rut);
  console.log("Diagnóstico: " + pacienteEncontrado.diagnostico);
} else {
  console.log("No se encontró ningún paciente con ese nombre.");
}
