var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new Schema({
  name: {
    type: String,
    required: 'Insira um nome',
    unique: true,
    minLength: 1,
    dropDups: true
  },
  email: {
    type: String,
    required: 'Insira um email',
    unique: true,
    minLength: 1,
    dropDups: true
  },
  phone: {
    type: String,
    required: 'Insira um telefone',
    unique: true,
    minLength: 1,
    dropDups: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Contacts', ContactSchema);
