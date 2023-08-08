class Proveedor {
    // Creamos una clase llamada "Proveedor"
    constructor(nombre, articulo, precio) {
      // Creamos el constructor con los parámetros "nombre", "articulo" y "precio"
      this._nombre = nombre;
      this._articulo = articulo;
      this._precio = precio;
      // Establecemos las propiedades "_nombre", "_articulo" y "_precio" como privadas, usando "_"
    }
    get nombre() {
      // Creamos un getter para obtener el nombre del proveedor
      return this._nombre;
    }
    set nombre(value) {
      // Creamos un setter para establecer el nombre del proveedor
      this._nombre = value;
    }
    get articulo() {
      // Creamos un getter para obtener el artículo del proveedor
      return this._articulo;
    }
    set articulo(value) {
      // Creamos un setter para establecer el artículo del proveedor
      this._articulo = value;
    }
    get precio() {
      // Creamos un getter para obtener el precio del proveedor
      return this._precio;
    }
    set precio(value) {
      // Creamos un setter para establecer el precio del proveedor
      this._precio = value;
    }
  }
  
  class Articulo {
    // Creamos una clase llamada "Articulo"
    constructor(nombre, email, telefono) {
      // Creamos el constructor con los parámetros "nombre", "email" y "telefono"
      this._nombre = nombre;
      this._email = email;
      this._telefono = telefono;
      // Establecemos las propiedades "_nombre", "_email" y "_telefono" como privadas, usando "_"
    }
    get nombre() {
      // Creamos un getter para obtener el nombre del artículo
      return this._nombre;
    }
    set nombre(value) {
      // Creamos un setter para establecer el nombre del artículo
      this._nombre = value;
    }
    get email() {
      // Creamos un getter para obtener el email del artículo
      return this._email;
    }
    set email(value) {
      // Creamos un setter para establecer el email del artículo
      this._email = value;
    }
    get telefono() {
      // Creamos un getter para obtener el teléfono del artículo
      return this._telefono;
    }
    set telefono(value) {
      // Creamos un setter para establecer el teléfono del artículo
      this._telefono = value;
    }
    getInfoProveedor(proveedor) {
      // Creamos un método llamado "getInfoProveedor" que toma un objeto "proveedor" como parámetro y devuelve una cadena de texto
      return `El proveedor de ${this.nombre} es ${proveedor.nombre}`;
    }
  }
  
  class TipoProveedor extends Proveedor {
    // Creamos una clase llamada "TipoProveedor" que hereda de la clase "Proveedor"
    constructor(nombre, articulo, precio, pais, esInternacional) {
      // Creamos el constructor con los parámetros "nombre", "articulo", "precio", "pais" y "esInternacional"
      super(nombre, articulo, precio);
      // Llamamos al constructor de la clase padre "Proveedor" usando "super"
      this._pais = pais;
      this._esInternacional = esInternacional;
      // Establecemos las propiedades "_pais" y "_esInternacional" como privadas, usando "_"
    }


    get pais() { // Define un método getter llamado "pais"
        return this._pais; // Devuelve el valor de la propiedad "pais"
      }
      set pais(value) { // Define un método setter llamado "pais"
        this._pais = value; // Asigna el valor "value" a la propiedad "pais"
      }
      get esInternacional() { // Define un método getter llamado "esInternacional"
        return this._esInternacional; // Devuelve el valor de la propiedad "esInternacional"
      }
      set esInternacional(value) { // Define un método setter llamado "esInternacional"
        this._esInternacional = value; // Asigna el valor "value" a la propiedad "esInternacional"
      }
      getInfoProveedor() { // Define un método llamado "getInfoProveedor"
        return `El proveedor de ${this.articulo} es ${this.nombre}, su teléfono es ${this.telefono}, y es un proveedor ${this.esInternacional ? 'internacional' : 'nacional'} de ${this.pais}.`; // Devuelve una cadena de texto con información sobre el proveedor
      }
    }
    
    export { Proveedor, Articulo, TipoProveedor }; // Exporta las clases "Proveedor", "Articulo" y "TipoProveedor"
  
  