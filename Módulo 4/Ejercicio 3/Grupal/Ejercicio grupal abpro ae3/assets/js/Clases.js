//Clase Empresa
class Empresa {
  constructor(id, nombre, rut) {
    this.id = id;
    this.nombre = nombre;
    this.rut = rut;
    this.importaciones = []; // Un arreglo para almacenar las importaciones
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getRut() {
    return this.rut;
  }

  setRut(rut) {
    this.rut = rut;
  }

  getImportaciones() {
    return this.importaciones;
  }

  agregarImportacion(importacion) {
    this.importaciones.push(importacion);
  }
}
  
  
  // Clase Importacion
  class Importacion {
    constructor(id, producto, numeroProducto, precioUnitario) {
      this.id = id;
      this.producto = producto;
      this.numeroProducto = numeroProducto;
      this.precioUnitario = precioUnitario;
    }
  
    getId() {
      return this.id;
    }
  
    setId(id) {
      this.id = id;
    }
  
    getProducto() {
      return this.producto;
    }
  
    setProducto(producto) {
      this.producto = producto;
    }
  
    getNumeroProducto() {
      return this.numeroProducto;
    }
  
    setNumeroProducto(numeroProducto) {
      this.numeroProducto = numeroProducto;
    }
  
    getPrecioUnitario() {
      return this.precioUnitario;
    }
  
    setPrecioUnitario(precioUnitario) {
      this.precioUnitario = precioUnitario;
    }
  }
  


  
  // Clase Rubro

  class Rubro {
    constructor(id, nombre, tamaño) {
      // super(idImportacion, producto, numeroProducto, precioUnitario);
      this.id = id;
      this.nombre = nombre;
      this.tamaño = tamaño;
    }
  
    getId() {
      return this.id;
    }
  
    setId(id) {
      this.id = id;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    getTamaño() {
      return this.tamaño;
    }
  
    setTamaño(tamaño) {
      this.tamaño = tamaño;
    }
  }

  
  
  
  // Se agrega un método para la clase Empresa llamado agregarImportacion, que recibe como parámetro una importación y la agrega al arreglo de importaciones
  Empresa.prototype.agregarImportacion = function(importacion) {
    this.importaciones.push(importacion);
  };
  
  // Se agrega un método para la clase Empresa llamado sumaTotalImportaciones, que calcula y devuelve el total de todas las importaciones de la empresa
  Empresa.prototype.sumaTotalImportaciones = function() {
    let total = 0;
    for (let importacion of this.importaciones) {
      total += importacion.numeroProducto * importacion.precioUnitario;
    }
    return total;
  };
  
  // Se agrega un método para la clase Empresa llamado sumaTotalNumeroProductoPrecioUnitario, que calcula y devuelve la suma del número de productos multiplicado por el precio unitario de cada importación
  Empresa.prototype.sumaTotalNumeroProductoPrecioUnitario = function() {
    let total = 0;
    for (let importacion of this.importaciones) {
      total += importacion.numeroProducto * importacion.precioUnitario;
    }
    return total;
  };
  
  // Se agrega un método para la clase Empresa llamado mostrarInformacion, que muestra en consola la información de la empresa y sus importaciones
  Empresa.prototype.mostrarInformacion = function() {
    console.log(`Empresa ${this.nombre} (ID: ${this.id}, RUT: ${this.rut})`);
    console.log(`Importaciones:`);
    for (let importacion of this.importaciones) {
      console.log(`- ID: ${importacion.id}, Producto: ${importacion.producto}, Cantidad: ${importacion.numeroProducto}, Precio Unitario: ${importacion.precioUnitario}`);
    }
  };
  

  export { Empresa, Importacion, Rubro };