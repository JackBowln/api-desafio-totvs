var express = require('express');
var app = express();
var cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

module.exports = function(app) {
    var contacts = require('../controllers/contactController');
  
    // contacts Routes
    app.route('/contacts', cors())
      .get(contacts.list_all_contacts)
      .post(contacts.create_a_contact);
  
  
    app.route('/contacts/:contactId', cors())
      .get(contacts.read_a_contact)
      .put(contacts.update_a_contact)
      .delete(contacts.delete_a_contact);
  };
  