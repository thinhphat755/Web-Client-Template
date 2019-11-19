var Product = require('../models/products');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productsDB');

var products = [
    new Product({
        imagePath: "themes/images/ladies/1.jpg",
        title: "Đầm chấm bi",
        category: "Đầm",
        price: 20
    }),
    new Product({
        imagePath: "themes/images/ladies/2.jpg",
        title: "Đầm hoa văn",
        category: "Đầm",
        price: 22
    }),
    new Product({
        imagePath: "themes/images/ladies/3.jpg",
        title: "Đầm ôm",
        category: "Đầm",
        price: 20
    }),
    new Product({
        imagePath: "themes/images/ladies/4.jpg",
        title: "Áo thun xám",
        category: "Áo thun",
        price: 25
    }),
];

var done = 0;

for(var i = 0;i < products.length;i++){
    products[i].save(function(err, result){
        done ++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}