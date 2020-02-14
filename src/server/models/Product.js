const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  brand: {
    type: String
  },
  color: {
    type: String
  },
  gender: {
    type: String
  },
  imgUrl: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Product', ProductSchema, 'Products');
