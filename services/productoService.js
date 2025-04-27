
const { guardarProducto, listarProductos } = require('../repositories/productoRepository');

function agregarProducto(nombre, precio) {
  const producto = { id: Date.now(), nombre, precio };
  guardarProducto(producto);
  return producto;
}

function obtenerProductos() {
  return listarProductos();
}

module.exports = {
  agregarProducto,
  obtenerProductos,
};
