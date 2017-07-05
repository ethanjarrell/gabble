const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-Parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const session = require('express-session');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views')
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// const user = models.user.build({
//   name: 'Ethan Jarrell',
//   email: 'ethan.jarrel@gmail.com',
//   username: 'ejarrell',
//   password: 'password'
// })
//
// user.save().then(function(user) {
//   console.log(user);
// })

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.get('/login', function (req, res) {
  res.render('login');
});

// app.get('/home', function (req, res) {
//   res.render('home');
// });

app.get('/newgab', function (req, res) {
  res.render('newgab');
});

app.get('/logout', function (req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  if (req.session && req.session.authenticated) {
    var user = models.user.findOne({
      where: {
        username: req.session.username
      }
    }).then(function(currentUser) {
      res.render('index', {user: currentUser});
    })
  } else {
    res.redirect('/home')
  }
})

app.post('/login', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  models.user.findOne({
    where: {
      username: username,
      password: password
    }
  }).then(user => {
    if (user.password == password) {
      req.session.username = username;
      req.session.authenticated = true;
      res.redirect('/home');
    } else {
      res.redirect('/login');
    }
  })
})

app.post('/signup', function(req, res) {
  const user = models.user.build({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  console.log(req.body);

  user.save().then(function(user) {
    req.username = user.username;
    req.authenticated = true;
    res.redirect('/login')
    console.log(req.session);
  })


})

// app.get('/', function(req, res) {
//   models.user.findAll().then(function(user) {
//     res.render('index', {users: users})
//   })
// })

app.post('/signup', function(req, res) {
  const newUser = models.user.build({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })

  user.save();
  res.redirect('/')
})

app.post('/newgab', function(req, res) {
  const post = models.post.build({
  title: req.body.gabtitle,
  body: req.body.gabbody
})

post.save().then(function(post) {
  console.log(post);
  })
})

app.get('/home', function(req, res) {
  models.post.findAll().then(function(posts) {
    res.render('home', {posts: posts})
  })
})

// app.get('/home', function(req, res) {
//   userid = models.user.id
//   username = req.body.username


app.post('/home', function(req,res) {
  const post = models.post.build({
    title: req.body.gabtitle,
    body: req.body.gabbody
  })

  post.save();
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
