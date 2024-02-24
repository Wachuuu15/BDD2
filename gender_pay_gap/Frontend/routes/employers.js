const express = require('express');
const router = express.Router();
const employerController = require('../controllers/EmployerController');

// Ruta
router.get('/', employerController.mostrar);

module.exports = router;
