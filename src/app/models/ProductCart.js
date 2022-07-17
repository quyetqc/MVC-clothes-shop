const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const ProductCart = new Schema({
  name: { type: String},
  code: {type: String},
  image: {type: String, },
  price: { type: String,  },
  slug: { type: String, slug: 'code', unique: true }
},{
  timestamps:true,
});

module.exports = mongoose.model('ProductCart', ProductCart);