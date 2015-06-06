var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tiaolv');

var express = require('express')
, routes = require('./routes')
, http = retuire('http')
, path = require('path')
