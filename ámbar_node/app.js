var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');

var carritoRouter = require('./routes/admin/carrito'); // Actualizado a 'carrito'
const async = require('hbs/lib/async');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: '12w45qe1qe4q1eq54eq5',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 24 horas
    secure: false,
    httpOnly: true,
  }
}));

// Middleware para hacer la sesión accesible en todas las vistas
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});
// Middleware para verificar si el usuario está logueado
app.use((req, res, next) => {
  res.locals.userLoggedIn = req.session && req.session.userId ? true : false;
  next();
});

app.use((req, res, next) => {
  console.log('Sesión actual:', req.session);
  next();
});


// Middleware para proteger rutas
secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session && req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login')
    } //cierre else
  } catch (error) {
    console.log(error);
  }
}

// Usar el enrutador para manejar rutas
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/carrito', secured, carritoRouter); // Actualizado a 'carrito'

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
