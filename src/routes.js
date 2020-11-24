const express = require('express');
const SetorController = require('./controllers/SetorController');
const ColaboradorController = require('./controllers/ColaboradorController');
const CargoController = require('./controllers/CargoController');

const routes = express.Router();

routes.options('/colaborador');
routes.get('/colaborador', ColaboradorController.get);
routes.get('/colaborador/:id', ColaboradorController.getById);
routes.post('/colaborador', ColaboradorController.store);
routes.put('/colaborador/:id', ColaboradorController.update);
routes.delete('/colaborador/:id', ColaboradorController.delete);

routes.get('/setor', SetorController.get);

routes.get('/cargo/:setor_id/setor', CargoController.get);
module.exports = routes;
