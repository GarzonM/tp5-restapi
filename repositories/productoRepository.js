// repositories/productoRepository.js

const productos = [];

function guardarProducto(producto) {
  productos.push(producto);
}

function listarProductos() {
  return productos;
}

module.exports = {
  guardarProducto,
  listarProductos,
};
