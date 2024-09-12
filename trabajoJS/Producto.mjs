let idProducto = 0;

export default class Producto {
  constructor() {
    this.idProducto = idProducto++;
    this.nombre = '';
    this.precio = 0;
  }

  getIdProducto() {
    return this.idProducto;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getPrecio() {
    return this.precio;
  }

  setPrecio(precio) {
    this.precio = precio;
  }

  toString() {
    return `Producto: [idProducto=${this.idProducto}, nombre=${this.nombre}, precio=${this.precio}]`;
  }

  crearProducto(id, nombre, precio) {
    this.idProducto = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}


  
  