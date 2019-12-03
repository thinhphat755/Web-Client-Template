// var express = require('express');
// var router = express.Router();
// const bcrypt = require('bcryptjs');
// const { check, validationResult } = require('express-validator');

// //Bring in User Model
// let User = require('../models/user');

// /* GET register page. */
// router.get('/', function(req, res, next) {
//   res.render('register');
// });

// /* Register Process*/
// router.post('/', function(req, res){    
//     const name = req.body.name;
//     const email = req.body.email;
//     const username = req.body.username;
//     const password = req.body.password;
//     const password2 = req.body.password2;

//     check('name', 'Name is required').notEmpty();
//     check('email', 'Email is required').notEmpty();
//     check('email', 'Email is not valid').isEmail();
//     check('username', 'Username is required').notEmpty();
//     check('password', 'Password is required at least 6 characters').isLength({min: 6});
//     check('password2', 'Passwords do not match').equals(req.body.password);

//     let errors = validationResult(req);

//     if(errors){
//         res.render('register',{
//             errors:errors
//         });
//     } else{
//         let newUser = new User({
//             name:name,
//             email:email,
//             username:username,
//             password:password
//         });

//         bcrypt.genSalt(10, function(err, salt){
//             bcrypt.hash(newUser.password, salt, function(err, hash){
//                 if(err){
//                     console.log(err);
//                 }
//                 newUser.password = hash;
//                 newUser.save(function(err){
//                     if(err){
//                         console.log(err);
//                         return;
//                     } else{
//                         req.flash('Thành công', 'Bạn đã đăng ký thành công và có thể đăng nhập ngay bây giờ');
//                         res.redirect('/index');
//                     }
//                 });
//             });
//         });
//     }
// });

// router.get('/login', function(req, res){
//     res.render('login');
// });

// module.exports = router;