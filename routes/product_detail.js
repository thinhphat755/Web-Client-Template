var express = require('express');
var router = express.Router();
var Product = require('../models/products');
var productController = require('../controllers/productController');

router.get('/:id', productController.productDetail);
/* GET product detail page. */
// router.get('/', function(req, res, next) {
//   res.render('product_detail');
// });

module.exports = router;