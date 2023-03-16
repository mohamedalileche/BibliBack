const Livre = require('../Models/Livre');
const Categorie = require('../Models/Categorie');

// Créer une Categorie 

exports.createCategorie = async (req, res) => {
    try {
      const categorie = new Categorie ({
        Titre: req.body.Titre,
        Description: req.body.Description,
      });
      const result = await categorie.save();
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message});
    }
  };


// Modifier une Categorie
exports.updatedCategorie = async (req, res) => {
    try {
      const CategorieUpdated = await Categorie.findByIdAndUpdate(req.params.id, req.body);
      res.json(CategorieUpdated);
    } catch (err) {
      res.status(400).json({ message: err.message});
    }
  };


// Supprimer une Categorie
exports.deletedCategorie = async (req, res) => {
    try {
      const CategorieDeleted = await Categorie.findByIdAndRemove(req.params.id); 
      if (CategorieDeleted) {
        res.json({ message: 'Supprimée !' }); 
      } else {
        res.status(404).json({ message: 'Supprimée !'}); 
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); 
    }
  };


  // Afficher une categorie Specifique
exports.searchCategorie = async (req, res, next) => {
    let category;
    const key = req.params.key;
    try {
        category = await Categorie.find({
            "$or": [
                {"Titre":{ $regex : new RegExp(key, "i") }},
                {"Description":{ $regex : new RegExp(key, "i") }},          
            ]})
    } catch (error) {
        console.log(error)
    }
    if(!category){
      return res.status(404).json({ message : "Categorie non trouvé"})
    }
    return res.status(200).json({ category })
  };


  // Afficher tous les Categories
exports.getAllCategory = async (req, res, next) => {
    let Categories;
        try {
            Categories = await Categorie.find();
        } catch (err) {
            console.log(err)
        }
        if(!Categories){
            return res.status(404).json({ message : "Categories non trouvé"})
        }
        return res.status(200).json({ Categories })
  };


  // Recherche Livre specifique
exports.searchBook = async (req, res, next) => {
    let book;
    const key = req.params.key;
    try {
        book = await Livre.find({
            "$or": [
                {"Titre":{ $regex : new RegExp(key, "i") }},
                {"Categorie":{ $regex : new RegExp(key, "i") }},          
            ]})
    } catch (error) {
        console.log(error)
    }
    if(!book){
      return res.status(404).json({ message : "Livre non trouvé"})
    }
    return res.status(200).json({ book })
  }
//ajouter un livre
exports.addBook = async (req, res) => {
    try {
      const book = new Livre ({
        Titre: req.body.Titre,
        Auteur: req.body.Auteur,
        Categori: req.body.Categori,
        Note: req.body.Note,
        Nombre_copie: req.body.Nombre_copie,
        Nombre_emprunt: req.body.Nombre_emprunt, 
      });
      const result = await book.save();
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message});
    }
  };


// Supprimer un Livre
exports.deletedBook = async (req, res) => {
    try {
      const BookDeleted = await Livre.findByIdAndRemove(req.params.id); 
      if (BookDeleted) {
        res.json({ message: 'Livre Supprimé de la BibliTech' }); 
      } else {
        res.status(404).json({ message: 'Livre Supprimé de la BibliTech'}); 
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); 
    }
  };
// Modifier livre
exports.updatedBook = async (req, res) => {
    try {
      const LivreUpdated = await Livre.findByIdAndUpdate(req.params.id, req.body);
      res.json(LivreUpdated);
    } catch (err) {
      res.status(400).json({ message: err.message});
    }
  };






















