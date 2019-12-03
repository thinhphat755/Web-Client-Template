var Product = require('../models/products');
var async = require('async');

exports.productList = (req, res, next) => {
    var action = req.query.act;

    if(action === 'women'){
        Product.find({gender: "women"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'dress'){
        Product.find({gender: "women", category: "Đầm"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'women_tshirt'){
        Product.find({gender: "women", category: "Áo thun"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'women_jacket'){
        Product.find({gender: "women", category: "Áo khoác"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'men'){
        Product.find({gender: "men"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'men_tshirt'){
        Product.find({gender: "men", category: "Áo thun"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'men_jacket'){
        Product.find({gender: "men", category: "Áo khoác"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'sports'){
        Product.find({gender: "sports"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'basketball'){
        Product.find({category: "Bóng rổ"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'soccer'){
        Product.find({category: "Bóng đá"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'running'){
        Product.find({category: "Chạy bộ"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'bags'){
        Product.find({category: "Cặp xách"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'accesory'){
        Product.find({category: "Phụ kiện"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
    else if(action === 'bestsell'){
        Product.find({category: "Bán chạy nhất"})
        .exec(function(err, listProduct){
        if(err) {return next(err);}
        else{
            res.render('products', {products: listProduct});
        }
    });
    }
}

exports.productDetail = (req, res, next) => {
    var id = req.params.id;

        async.parallel({
            product: function (callback){
                Product.findById(id)
                .exec(callback);
            }
        }, function (err, result) {
            if(err) {return next(err);}
            if(result.product == null) {
                var err = new Error('Product not found');
                err.status = 404;
                return next(err);
            }
            //Successful, so render
            res.render('product_detail', {product: result.product});
        }
        );
};