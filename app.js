var express = require('express');
var path = require('path');
var logger = require('morgan');
var index = require('./routes/index');
var app = express();

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use('/', index);

var port = process.env.PORT || '3000';

app.listen(port, function(error) {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

module.exports = app;
