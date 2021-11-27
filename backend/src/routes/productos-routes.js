const express = require('express');

const router = express.Router();

const productos = [
  { id: 1, nombre: 'PC All in One', precio: 38000, image: 'allinone.jpeg' },
  { id: 5, nombre: 'Mouse', precio: 5600, image: 'mouse.jpeg' },
  { id: 8, nombre: 'Teclado', precio: 7800, image: 'teclado.jpeg' },
  { id: 15, nombre: 'Impresora', precio: 45000, image: 'impresora.jpeg' },
];

//listar todos los productos
router.get('/', (req, res) => {
  res.json(productos);
});

//buscar un producto por id
router.get('/:id', (req, res) => {
  const productoId = req.params.id;

  const productoEncontrado = productos.find(
    (producto) => producto.id == productoId
  );

  if (productoEncontrado) {
    res.json(productoEncontrado);
  } else {
    res.json({ message: `No existe el producto` });
  }
});

//agregar un nuevo producto
router.post('/', (req, res) => {
  res.json({ message: 'El producto fue creado satisfactoriamente!' });
});

//buscar un producto por id y actualizarlo
router.put('/:id', (req, res) => {
  const productoId = req.params.id;
  const productoEncontrado = productos.find(
    (producto) => producto.id == productoId
  );
  if (productoEncontrado) {
    res.json({
      message: `El producto ${productoEncontrado.nombre} modificado exitosamente`,
    });
  } else {
    res.json({ message: 'El producto no existe' });
  }
});

//buscar un producto por id y eliminalo
router.delete('/:id', (req, res) => {
  const productoId = req.params.id;
  const productoEncontrado = productos.find(
    (producto) => producto.id == productoId
  );

  if (productoEncontrado) {
    res.json({
      message: `El producto ${productoEncontrado.nombre} eliminado exitosamente`,
    });
  } else {
    res.json({ message: 'El producto no existe' });
  }
});

module.exports = router;
