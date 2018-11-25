var User_Data = require('../models/user_data');

var async = require('async');

exports.user_list = function (req, res) {
    User_Data.countDocuments({}, function (err, count) {
        res.render('users', { title: count, data: count });
    });
};

exports.user_login = function (req, res) {
    res.render('login_form', { title: 'Login' });
};

exports.user_login_post = function (req, res, next) {
    User_Data.findOne({ 'username': req.body.username })
        .exec(function (err, found_user) {
            if (found_user) {
                if (found_user.password == req.body.password) {
                    res.cookie('username', req.body.username);
                    res.send("login");
                } else {
                    res.render('login_form', { title: 'Login', error: 'wrong pass' });
                }
            } else {
                res.render('login_form', { title: 'Login', error: 'cant find user' });
            }
        });
}

exports.user_register = function (req, res) {
    res.render('register_form', { title: 'Register' });
}

exports.user_register_post = function (req, res) {
    User_Data.findOne({ 'username': req.body.username })
        .exec(function (err, found_user) {
            if (found_user) {
                res.render('register_form', {title: 'Register', error: 'username exits'});
            } else {
                var newUser = new User_Data({
                    username: req.body.username,
                    password: req.body.password,
                    level: req.body.level,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name
                });

                newUser.save(function(err){
                    if(err){
                        res.send('cant register');
                    }else{
                        res.send('Sucessfully registered');
                    }
                })
            }
        });
}