const express = require('express');
const router = express.Router();

const empleadoController = require ('../controllers/empleadoController');

//SEE empleados
router.get('/', empleadoController.mostrar);


//CREATE empleados
router.post('/crear', empleadoController.crear);

router.post('/editar', empleadoController.editar);

router.get('/borrar/:id', empleadoController.borrar);

module.exports=router;

