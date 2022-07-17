const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Product = new Schema({
  fullName: {type: String},
  name: { type: String, },
  code: {type: String, },
  image: {type: String, },
  price: { type: String,  },
  slug: { type: String, slug: 'code', unique: true }
},{
  timestamps:true,
});

module.exports = mongoose.model('Product', Product);
