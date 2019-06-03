var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session'); 
//session lo usaremos para crear sesiones (variables super globales)


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registro = require('./routes/registro.js');
var panel = require('./routes/panel');
var login = require('./routes/login');
var promocion = require('./routes/promocion');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'1234', cookies:{maxAge:null}, saveUninitialized:false, resave:false}))
//secure : true

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registro',registro);
app.use('/panel', panel);
app.use('/login', login);
app.use('/promocion', promocion);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
