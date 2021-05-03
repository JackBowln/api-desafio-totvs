var express = require('express');
const app = express();
var port = process.env.PORT || 3000;
  const mongoose = require('mongoose');
  var Contact = require('./api/models/contactModel');
  var bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://viniciusdias:contactapipass@cluster0.y9q6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }); 
    
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('contacts api funcionando em: ' + port);
