const express = require('express')
const router = express.Router()

const employerController = require('../controllers/employerController')
router.get('/',employerController.mostrar)

module.exports=router