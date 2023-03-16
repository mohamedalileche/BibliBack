const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentaireSchema = new Schema({
    Client: {
        type: String,
        required: true
    },
    Livre: {
        type: String,
        required: true
    },
    Comment: {
        type: String,
        required: true
    },
    Replies: [{
        type: Schema.Types.ObjectId,
        required: true
    }],
});

module.exports = mongoose.model('Commentaire', CommentaireSchema);