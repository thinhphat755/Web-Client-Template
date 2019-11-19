var express = require('express');
var router = express.Router();
var Product = require('../models/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({})
  .exec(function(err, listProducts){
    if(err) {return next(err);}
    else{
      
      res.render('index', {products: listProducts});
    }
  });
});

module.exports = router;