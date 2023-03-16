const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorieSchema = new Schema ({
    Titre: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    });

module.exports =  mongoose.model("Categorie", CategorieSchema);