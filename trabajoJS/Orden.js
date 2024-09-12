import Producto from "./Producto.mjs";

class Orden {
  constructor(idOrden) {
    this.idOrden = idOrden;
    this.productos = [];
    this.contadorProductosAgregados = 0;
    this.MAX_PRODUCTOS = 5;
  }

  agregarProducto(id, nombre, precio) {
    const producto = new Producto();
    producto.crearProducto(id, nombre, precio);

    if (this.contadorProductosAgregados < this.MAX_PRODUCTOS) {
      this.productos.push(producto);
      this.contadorProductosAgregados++;
      console.log('Producto agregado a la orden.');
    } else {
      console.log('Se ha alcanzado el límite máximo de productos en la orden.');
    }
  }
    calcularTotal() {
      let total = 0;
      for (let i = 0; i < this.productos.length; i++) {
        total += this.productos[i].getPrecio();
      }
      return total.toFixed(2);
    }
  
    mostrarOrden() {
      console.log('Orden:', this.idOrden);
      console.log('Productos:');
      for (let i = 0; i < this.productos.length; i++) {
        console.log(this.productos[i].toString());
      }
      console.log('Total:', this.calcularTotal());
    }
  }
  
export {Orden};
 