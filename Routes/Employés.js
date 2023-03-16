const express = require('express');
const Controller = require('../Controllers/EmployéControllers');
const Employés = express.Router();


Employés.post('/Creer categorie', Controller.createCategorie);
Employés.put('modifier catg',Controller.updatedCategorie);
Employés.delete('Supprimer cat', Controller.deletedCategorie);
Employés.get('Categorie specifique', Controller.searchCategorie);
Employés.get('Toute les categorie', Controller.getAllCategory);
Employés.post('Ajouter un livre', Controller.addBook);
Employés.get('Livre specifique', Controller.searchBook);
Employés.put('Modifier livre', Controller.updatedBook);
Employés.delete('Supprimer un livre', Controller.deletedBook);



module.exports = Employés;