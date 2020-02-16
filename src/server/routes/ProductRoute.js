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
    const { color, price } = req.body.filterArray;

    // Switch function which changes each PriceText from input fields to useable mongo query
    const translatePriceToQuery = (priceText) => {
      switch (priceText) {
        case 'lessthan100':
          return {
            $lt: 100
          };
        case '100to200':
          return {
            $lt: 200,
            $gt: 100
          };
        case 'morethan200':
          return {
            $gt: 200
          };
        default:
          return {
            $gt: 0,
            $lt: 10000
          };
      }
    };
    // Function to handle empty color array
    // Returns all colors if array is empty
    const translateColorToQuery = (colorArr) => {
      if (colorArr.length <= 0) {
        return ['Black', 'White', 'Blue', 'Green'];
      }
      return colorArr;
    };

    // Using helper function to handle incorrect input
    const colorQuery = translateColorToQuery(color);
    const priceQuery = translatePriceToQuery(price);


    const products = await Product.find({
      $and: [{ color: { $in: colorQuery } }, { price: priceQuery }]
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
