var Product = require('../models/products');
const User = require('../models/user');

// exports.home = (req, res, next) => {
    
//     User.find({})
//     .exec(function(err){
//         if(err) {return next(err);}
//         else{
//             res.render('index', {user: req.user});
//         }
//     });
// }

exports.authentication = (req, res, next) => {
    
    User.find({})
    .exec(function(err){
        if(err) {return next(err);}
        else{
            Product.find({})
            .exec(function(err, listProduct){
                if(err) {return next(err);}
                else{
                    res.render('index', {user: req.user, products: listProduct});
                }
            });
            
        }
    });
}