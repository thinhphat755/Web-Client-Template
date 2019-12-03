var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET products page. */
router.get('/', productController.productList);
router.get('/product_detail/:id', productController.productDetail);

module.exports = router;