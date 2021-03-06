var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var compression = require('compression');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var apiRouter = require('./routes/api');
var logsRouter = require('./routes/logs');
var analysisRouter = require('./routes/analysis');
var viewRouter = require('./routes/view');

var mongoose = require('mongoose');

var app = express();

app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/api', apiRouter);
app.use('/logs', logsRouter);
app.use('/analysis', analysisRouter);
app.use('/view', viewRouter);
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

var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1/user_list';
mongoose.connect(mongoDB, { useNewUrlParser: true });

module.exports = app;
