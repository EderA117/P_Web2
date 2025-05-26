const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const routes = require('./routs/rutas');


const app = express();

// Configurar plantilla
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.use('/', routes);

// Iniciar servidor
const port = 3018;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
