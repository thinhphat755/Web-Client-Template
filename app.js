require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require ('express-handlebars');
var mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const expressValidator = require('express-validator');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var checkoutRouter = require('./routes/checkout');
var cartRouter = require('./routes/cart');
var registerRouter = require('./routes/register');
var productsRouter = require('./routes/products');
var product_detailRouter = require('./routes/product_detail');

var app = express();

//Passport Config
require('./config/passport')(passport);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

//check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

//check for DB errors
db.on('error', function(err){
  console.log(err);
});

// view engine setup
app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connet flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/index', homeRouter);
//app.use('/contact', contactRouter);
//app.use('/checkout', checkoutRouter);
//app.use('/cart', cartRouter);
//app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/product_detail', product_detailRouter);

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
