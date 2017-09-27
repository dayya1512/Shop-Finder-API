
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://dayya123:Password123@ds149974.mlab.com:49974/ishopnew')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;
var router = express.Router();

var shopController = require('./app/controllers/shop.js')
var shop = require('./app/model/shop.js')


router.get('/',function(req,res){
    res.json({message:'Welcome to our iShop Dashboard!'})
})

router.route('/shops')
.post(shopController.postShop)
.get(shopController.getShop)


router.route('/shops/:shop_id')
.get(shopController.findShop)
.post(shopController.updateShop)
.delete(shopController.deleteShop)

router.route('/search/:name')
.get(shopController.findShopByName)
.post(shopController.updateShopByName)
.delete(shopController.deleteShopByName)

app.use('/',router)
app.listen(PORT,function(){
    console.log('server is listening '+ PORT);
})

module.exports = app