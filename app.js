
const express = require('express');
const app = express();
const productoController = require('./controllers/productoController');

app.use(express.json()); // Middleware para parsear JSON
app.use('/api', productoController); // Prefijo /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
