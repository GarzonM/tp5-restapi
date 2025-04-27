
const express = require('express');
const router = express.Router();
const { agregarProducto, obtenerProductos } = require('../services/productoService');

router.get('/productos', (req, res) => {
  const productos = obtenerProductos();
  res.json(productos);
});

router.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  
  if (!nombre || typeof precio !== 'number') {
    return res.status(400).json({ error: 'Nombre y precio son requeridos y válidos.' });
  }
  
  const producto = agregarProducto(nombre, precio);
  res.status(201).json(producto);
});

module.exports = router;
