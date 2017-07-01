module.exports = {
//   app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }));
//
// app.use(function (req, res, next) {
//   var views = req.session.views;
//
//   if (!views) {
//     views = req.session.views = {};
//   }
//
//   // get the url pathname
//   var pathname = parseurl(req).pathname;
//
//   // count the views
//   views[pathname] = (views[pathname] || 0) + 1
//
//   next();
// })
//
// function authenticate(req, username, password){
//   var authenticatedUser = models.user.find(function (user) {
//     if (username === user.username && password === user.password) {
//       req.session.authenticated = true;
//       console.log('User & Password Authenticated');
//     } else {
//       return false
//     }
//   });
//   console.log(req.session);
//   return req.session;
// }
//
// app.get('/foo', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
// })
//
// app.get('/bar', function (req, res, next) {
//   res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
// })
//
// app.get('/', function(req, res){
//   res.redirect('/login');
// })
//
// app.get('/login', function (req, res){
//   res.render('index');
// });
//
// app.post('/', function(req, res){
//   var username = req.body.username;
//   var password = req.body.password;
//   authenticate(req, username, password);
//   if (req.session && req.session.authenticated){
//     res.render('index', { users: users });
//   } else {
//     res.redirect('/');
//   }
// })
}
