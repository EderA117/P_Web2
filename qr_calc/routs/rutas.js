const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Ruta de calculadora
router.get('/calculadora', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/calculadora.html'));
});

// Ruta de qr
router.get('/qr', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/qr.html'));
});

module.exports = router;