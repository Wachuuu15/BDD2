const express = require('express');
const router = express.Router();
const employerController = require('../controllers/EmployerController');

// Ruta GET
router.get('/info', employerController.mostrar);
//Ruta create POST
router.post('/info', employerController.crear);
// Editar Employer POST
router.post('/editar', employerController.editar);
// Borrar Employer GET
router.get('/borrar/:id', employerController.borrar);
module.exports = router;