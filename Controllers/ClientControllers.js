const Client = require('../Models/Client');
const Livre = require('../Models/Livre')
const Emprunt = require('../Models/Employé')
const Commentaire = require('../Models/Commentaire')

// Afficher tous les livres
exports.getAllLivres = async (req, res, next) => {
    let books;
        try {
            books = await Livre.find();
        } catch (err) {
            console.log(err)
        }
        if(!books){
            return res.status(404).json({ message : "Livre non trouvé"})
        }
        return res.status(200).json({ books })
  };
    //Emprunter 
exports.addEmprunt = async (req, res) => {
    try {
    const { Livre, DateSortie, DateRetour, Client } = req.body;

  
    const emprunt = new Emprunt({ Client, Livre, DateSortie, DateRetour });
    const result = await emprunt.save();
    res.status(201).json(result);
    } catch (error) {
        next(error);
    }
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



   
    

///////Commentaire

exports.addComment = async (req, res) => {
    try {
        const { Client, Livre, Comment, Replies } = req.body;
      const newComment = new Commentaire({
        Client: Client,
        Livre: Livre,
        Comment: Comment,
        Replies: []
      });
  
      await newComment.save();
      res.status(200).json(newComment);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur est survenue lors de l'ajout du commentaire" });
    }
  }
  
  exports.addReply = async (req, res) => {
    try {
      // Récupérer les informations nécessaires depuis la requête HTTP
      const Client = req.body.Client;
      const Livre = req.body.Livre;
      const CommentId = req.params.id;
      const replyText = req.body.replyText;
  
      // Rechercher le commentaire parent dans la base de données
      const parentComment = await Commentaire.findById(CommentId);
  
      // Vérifier si le commentaire parent existe
      if (!parentComment) {
        return res.status(404).json({ message: "Commentaire introuvable" });
      }
  
      // Créer un nouveau commentaire avec les informations fournies
      const newReply = {
        Client: Client,
        Livre: Livre,
        replyText: replyText
      };
  
      // Ajouter le nouveau commentaire en tant que réponse au commentaire parent
      parentComment.Replies.push(newReply);
      await parentComment.save();
      res.status(200).json(parentComment);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur est survenue lors de l'ajout de la réponse" });
    }
  }
  
// Fonction pour afficher l'historique
exports.Historique = async (req, res) => {
    try {
      const historique = await Emprunt.find({ Client: req.params.id })
        .populate('Livre')
      res.json(historique);
    } catch (err) {
      console.log(err);
    }
  }  

  
  
  
  
  
  
  
  
  
    
  

  
  
  
  
  
  
  
  
  
  
  
  

    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    


  

 