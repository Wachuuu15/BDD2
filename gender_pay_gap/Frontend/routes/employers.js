const express = require('express');
const router = express.Router();
const employerController = require('../controllers/EmployerController');

// Ruta GET
router.get('/info', employerController.mostrar);
//Ruta create POST
router.post('/info', employerController.crear);

module.exports = router;