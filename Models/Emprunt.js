const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmpruntSchema = new Schema({
  Livre: {
    type: String,
    required: true
  },
  Client: {
    type: String,
    required: true
  },
  DateSortie: {
    type: Date,
    required: true,
  },
  DateRetour: {
    type: Date,
    required: true
  },
  
});

module.exports = mongoose.model('Emprunt', EmpruntSchema);