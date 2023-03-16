const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LivreSchema = new Schema({
Titre : {
    type:String,
    required:true,
    unique:true
},
Auteur :{
    type:String,
    required:true
},
Categori: {
    type: String,
    required: true,
  },
Note: {
    type: String,
    required: true,
},
Nombre_copie: {
    type:Number,
    required:true,
},
Nombre_emprunt:{
    type:Number,
    default:0
},
});

module.exports = mongoose.model('Livre', LivreSchema);