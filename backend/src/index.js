const express = require('express');
const cors = require('cors');

const productosRoutes = require('./routes/productos-routes');

const app = express();

app.use(cors());

app.use('/productos', productosRoutes);

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
