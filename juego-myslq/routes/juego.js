'use strict'

const express = require('express');

const controlador = require('../controlador/juego');

const router = express.Router();

router.get('/juego/ver_todo', controlador.ver_todo);

router.get('/juego/ver_uno/:id' , controlador.ver_uno);

router.post('/juego/guardar', controlador.guardar);

router.delete('/juego/eliminar/:id', controlador.eliminar);


router.put('/juego/modificar/:id', controlador.modificar);



module.exports = router;
