var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var commentSchema = new Schema ({
	commentName: String,
	commentDescription: String,
});


var shopSchema = new Schema ({

	name: String,
	description: [String],
	image: String,
	address: String,
	lat:Number,
	long: Number,
	category: String,
	email: String,
	phone: Number,
	comment: [commentSchema],
});

module.exports = mongoose.model('Shop',shopSchema)