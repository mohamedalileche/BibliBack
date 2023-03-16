const express = require('express');
const Controller = require('../Controllers/ClientControllers');
const Clients = express.Router();

Clients.get('/Afficherlivres', Controller.getAllLivres);
Clients.get('Affichelivrespe', Controller.searchBook);
Clients.post('Emprunter', Controller.addEmprunt);
Clients.post('Commenter', Controller.addComment);
Clients.post('Commenter un comm', Controller.addReply);



module.exports = Clients;
