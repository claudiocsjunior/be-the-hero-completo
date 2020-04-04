const express = require('express');

//Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router();

//Autenticação
routes.post('/sessions', SessionController.create);

//Criar ongs
routes.post('/ongs', OngController.create);

//buscar ongs
routes.get('/ongs', OngController.index);

//Criar Incidents
routes.post('/incidents', IncidentController.create);

//LIstar incidents
routes.get('/incidents', IncidentController.index);

//Deletar incidents
routes.delete('/incidents/:id', IncidentController.delete);

//Listar incidents de uma ong
routes.get('/profile', ProfileController.index);


module.exports = routes;