// var Product = require('../models/products');
// var mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL,
// { useNewUrlParser: true, 
//     useUnifiedTopology: true 
//   });

// var products = [
//     new Product({
//         imagePath: "themes/images/ladies/1.jpg",
//         title: "Đầm chấm bi",
//         category: "Đầm",
//         price: 20,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/ladies/2.jpg",
//         title: "Đầm hoa văn",
//         category: "Đầm",
//         price: 22,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/ladies/3.jpg",
//         title: "Đầm ôm",
//         category: "Đầm",
//         price: 20,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/ladies/4.jpg",
//         title: "Áo thun xám",
//         category: "Áo thun",
//         price: 25,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/ladies/5.jpg",
//         title: "Đầm đen huyền",
//         category: "Đầm",
//         price: 21,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/ladies/6.jpg",
//         title: "Áo thun hồng đen",
//         category: "Áo thun",
//         price: 22,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/ladies/7.jpg",
//         title: "Đầm xanh lá",
//         category: "Đầm",
//         price: 19,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/ladies/8.jpg",
//         title: "Áo thun dài tay",
//         category: "Áo thun",
//         price: 18,
//         gender: 'women'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/jacket_1.jpg",
//         title: "Áo khoác MABU - Đỏ",
//         category: "Áo khoác",
//         price: 20,
//         gender: 'men'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/jacket_2.jpg",
//         title: "Áo khoác sơ mi Caro",
//         category: "Áo khoác",
//         price: 22,
//         gender: 'men'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/jacket_3.jpg",
//         title: "Áo khoác MABU - xanh dương",
//         category: "Áo khoác",
//         price: 21,
//         gender: 'men'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/jacket_4.jpg",
//         title: "Áo khoác MABU - xám",
//         category: "Áo khoác",
//         price: 19,
//         gender: 'men'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/Tshirt_1.jpg",
//         title: "Áo thun No Style - trắng",
//         category: "Áo thun",
//         price: 15,
//         gender: 'men'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/Tshirt_2.jpg",
//         title: "Áo thun No Style - cam",
//         category: "Áo thun",
//         price: 15,
//         gender: 'men'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/Tshirt_3.jpg",
//         title: "Áo thun No Style - Đen",
//         category: "Áo thun",
//         price: 16,
//         gender: 'men'
//     }),
//     new Product({
//         imagePath: "themes/images/cloth/Tshirt_4.jpg",
//         title: "Áo thun No Style - xanh dương",
//         category: "Áo thun",
//         price: 16,
//         gender: 'men'
//     }),
// ];

// var done = 0;

// for(var i = 0;i < products.length;i++){
//     products[i].save(function(err, result){
//         done ++;
//         if(done === products.length){
//             exit();
//         }
//     });
// }

// function exit(){
//     mongoose.disconnect();
// }