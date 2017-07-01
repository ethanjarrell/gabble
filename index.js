const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const data = require("./data/comment.js");
const app = express();
const user = require('./data/user.js');

// const newUser = models.User.build({
// name:"Ethan Jarrell",
// email: "ethan.jarrell@gmail.com",
// username: "jokesethan",
// password: "password"
// })
//
// newUser.save().then(function(newTask){
//   console.log(newTask)
// })

// models.User.findOne().then(function(task){
//   console.log(task)
// })

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache');
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res){
  models.User.findAll().then(function(tasks){
    res.render('index',{tasks: tasks})
  })
  res.send('index')
})


app.listen(3000, function () {
  console.log('Successfully started express application!');
});
