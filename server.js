var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://dayya123:Password123@ds121674.mlab.com:21674/ishopmy')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;
var router = express.Router();

var shopController = require('./app/controllers/shop.js')
var shop = require('./app/model/shop.js')
