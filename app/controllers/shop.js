var Shop = require('../model/shop.js');

exports.postShop = function(req,res){
	var shop = new Shop();
	shop.name = req.body.name;
	shop.description = req.body.description;
	shop.image = req.body.image;
	shop.address = req.body.address;
	shop.lat = req.body.lat;
	shop.long = req.body.long;
	shop.category = req.body.category;
	shop.email= req.body.email;
	shop.phone = req.body.phone;
	shop.comment = [];

 	shop.save(function(err,shop){
 		if (err) {
 			res.send(err);
 		}

 		else{
			res.json({message:'Shop is saved !'})
 		} 
	})
}

exports.getShop= function(req,res) {
 	Shop.find(function(err,shop){
 		if(err)
 			res.send(err);
 		res.json(shop);
 	})
}



exports.findShop = function(req,res){
	Shop.findById(req.params.shop_id, function(err,shop){
		if(err)
			res.send(err);
		res.json(shop);
	});
}


exports.findShopByName = function(req,res){
	Shop.find({"name":  new RegExp(".*" + req.params.name.replace(/(\W)/g,"\\$1")+ ".*", "i")}, 
	function(err,shop){
		if(err)
			res.send(err);
		res.json(shop);
	});
}

exports.updateShop = function(req,res){
	Shop.findById(req.params.shop_id, function(err,shop){
	shop.name = req.body.name;
	shop.description = req.body.description;
	shop.image = req.body.image;
	shop.address = req.body.address;
	shop.lat = req.body.lat;
	shop.long = req.body.long;
	shop.category = req.body.category;
	shop.email= req.body.email;
	shop.phone = req.body.phone;
	shop.comment = [];

 		shop.save(function(err){
 			if (err) 
 				res.send(err);
			res.json({message:'Shop updated!'})
 		})
	})
}

exports.updateShopByName = function(req,res){
	Shop.find({"name":  new RegExp(".*" + req.params.name.replace(/(\W)/g,"\\$1")+ ".*", "i")}, 
	function(err,shop){
	shop.name = req.body.name;
	shop.description = req.body.description;
	shop.image = req.body.image;
	shop.address = req.body.address;
	shop.lat = req.body.lat;
	shop.long = req.body.long;
	shop.category = req.body.category;
	shop.email= req.body.email;
	shop.phone = req.body.phone;
	shop.comment = [];

 		shop.save(function(err){
 			if (err) 
 				res.send(err);
			res.json({message:'Shop updated!'})
 		})
	})
}

exports.deleteShop = function(req,res){
	Shop.remove({_id: req.params.shop_id}, 
    function(err, shop) {
            if (err)
            	res.send(err);
            res.json({ message: 'Successfully deleted' });
        });	
}

exports.deleteShopByName = function(req,res){
	Shop.remove({"name":  new RegExp(".*" + req.params.name.replace(/(\W)/g,"\\$1")+ ".*", "i")}, 
	function(err,shop){
            if (err)
            	res.send(err);
            res.json({ message: 'Successfully deleted' });
        });	
}


exports.getCommentForShop = function(req,res){}
exports.createCommentForShop= function(req,res){

 Shop.findById(req.params.shop_id, function(err, shop) {
	if (err){
	 	 res.send(err);
	}

	else {
	 	var newComment = {
	 		commentName : req.body.commentName,
	 		commentDescription : req.body.commentDescription
	 	}

	 	shop.comment.push(newComment)
	 	shop.save(function(err) {
			if (err){
				res.send(err);
			}

			else {
				res.json({ message: 'Shop comment added' });
			}
		});
	}
 });
}
