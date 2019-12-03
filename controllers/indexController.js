var Product = require('../models/products');

exports.home = (req, res, next) => {
    
    Product.find({})
    .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('index', {products: listProduct});
        }
    });
}