var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var shopSchema = new Schema ({

	name: String,
	description: [String],
	image: String,
	location: String,
	category: String,
	email: String,
	phone: Number,

})

module.exports = mongoose.model('Shop',shopSchema)