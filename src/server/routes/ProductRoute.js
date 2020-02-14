const router = require('express').Router();
const Product = require('../models/Product');

// Unauthorized create route just for dev purpose
// @ROUTE GET /api/product/create
router.post('/create', async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    brand: req.body.brand,
    color: req.body.color,
    imgUrl: req.body.imgUrl
  });
  try {
    const savedProduct = await newProduct.save();
    return res.status(201).json({ message: 'Saved', savedProduct });
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Retrieve all products with no filter
// @ROUTE GET /api/product/index
router.get('/index', async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Retrive all produts with filter
// @ROUTE POST /api/product/filter
router.post('/filter', async (req, res) => {
  try {
    const { color } = req.body;
    let products;
    products = await Product.find({ color: { $in: color } });

    if (products.length === 0) {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
