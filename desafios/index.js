const Contenedor = require('./contenedor');
const productos = new Contenedor("productos.json");

const express = require('express');
const app = express();
const PORT = 8080;
const server = app.listen(process.env.PORT || PORT, () => console.log(`Servidor listo en puerto ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));
mensaje_bienvenida = '<a href="/productos">productos</a><br/><a href="/productoRandom">productoRandom</a>';


app.get('/', (req, res) => res.send(mensaje_bienvenida));

app.get('/productos', async (req, res) => {    
  const mostrarProductos = await productos.getAll();
  res.send( mostrarProductos);
  });

app.get('/productoRandom', async (req, res) => {    
  const producto = await productos.getAll();
  const numRandom = Math.floor(Math.random() * producto.length);
  res.send(producto[numRandom]);
  });