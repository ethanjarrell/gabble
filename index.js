const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const data = require("./data.js");
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache');
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));




app.listen(3000, function () {
  console.log('Successfully started express application!');
});
