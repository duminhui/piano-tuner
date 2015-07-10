var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tiaolv');

var express = require('express')

var server = express();

server.listen(3000);
server.set('views', './views');
server.set('view engine', 'jade');

server.use('/', require('./routes'));
