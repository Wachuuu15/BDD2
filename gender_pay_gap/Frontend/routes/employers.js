const express = require('express');
const router = express.Router();
const employerController = require('../controllers/EmployerController');
const userController = require('../controllers/UserController');

// Ruta GET
router.get('/info', employerController.mostrar);
//Ruta create POST
router.post('/info', employerController.crear);
// Editar Employer POST
router.post('/editar', employerController.editar);
// Borrar Employer GET
router.get('/borrar/:id', employerController.borrar);
// Ruta para la búsqueda de empleadores Employer GET
router.get('/search', employerController.search);
//Ruta create POST
router.post('/signup', userController.crear);


module.exports = router;