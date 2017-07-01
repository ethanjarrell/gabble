const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-Parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const session = require('express-session');
const authentication = require('./data/authentication.js');
const comment = require("./data/comment.js");
const like = require('./data/like.js');
const post = require('./data/post.js');
const user = require('./data/user.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache');
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(session({
secret: 'keyboard cat',
resave: false,
saveUninitialized: true
}));

app.use(function (req, res, next) {
var views = req.session.views;

if (!views) {
  views = req.session.views = {};
}

// get the url pathname
var pathname = parseurl(req).pathname;

// count the views
views[pathname] = (views[pathname] || 0) + 1

next();
})

function authenticate(req, username, password){
var authenticatedUser = models.user.find(function (user) {
  if (username === models.user.username && password === models.user.password) {
    req.session.authenticated = true;
    console.log('User & Password Authenticated');
  } else {
    return false
  }
});
console.log(req.session);
return req.session;
}

app.get('/foo', function (req, res, next) {
res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

app.get('/bar', function (req, res, next) {
res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})

app.get('/', function(req, res){
res.redirect('/login');
})

app.get('/login', function (req, res){
res.render('login');
});

app.post('/', function(req, res){
var username = req.body.username;
var password = req.body.password;
authenticate(req, username, password);
if (req.session && req.session.authenticated){
  res.render('index', { users: users });
} else {
  res.redirect('/');
}
})

// app.get('/', function(req, res){
//   models.User.findAll().then(function(users){
//     res.render('index',{users: users})
//   })
//
// })


app.listen(3000, function () {
  console.log('Successfully started express application!');
});
