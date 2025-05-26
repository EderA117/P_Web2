const express = require('express');
const router = express.Router();
const mysql = require('mysql2');



const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'mcfly117',
  database: 'node_crud',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.log('Error de conexión', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});




// Página de inicio: formulario agregar
router.get('/', (req, res) => {
  res.render('index');
});

// Ver usuarios
router.get('/ver', (req, res) => {
  const consultaDB = 'SELECT * FROM users';
  db.query(consultaDB, (err, results) => {
    if (err) {
      console.log('Error al recuperar usuarios', err);
      res.send('Error al recuperar datos');
    } else {
      res.render('ver', { users: results });
    }
  });
});

// Agregar usuario
router.post('/add', (req, res) => {
  const { name, email } = req.body;
  const insertarRegistro = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(insertarRegistro, [name, email], err => {
    if (err) {
      console.log('Error al agregar usuario: ', err);
      res.send('Error al agregar usuario');
    } else {
      res.redirect('/ver');
    }
  });
});

// Leer por ID
router.get('/read/:id', (req, res) => {
  const { id } = req.params;
  const buscarUsuarioId = 'SELECT * FROM users WHERE id = ?';
  db.query(buscarUsuarioId, [id], (err, results) => {
    if (err) {
      console.log('Error al buscar usuario: ', err);
    } else {
      res.render('edit', { user: results[0] });
    }
  });
});

// Actualizar usuario
router.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const actualizar = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(actualizar, [name, email, id], err => {
    if (err) {
      console.log('Error al actualizar: ', err);
    } else {
      res.redirect('/ver');
    }
  });
});

// Eliminar usuario
router.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  const borrar = 'DELETE FROM users WHERE id = ?';
  db.query(borrar, [id], err => {
    if (err) {
      console.log('Error al eliminar: ', err);
    } else {
      res.redirect('/ver');
    }
  });
});

module.exports = router;