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
                    res.send("login");
                } else {
                    res.render('login_form', { title: 'Login', error: 'wrong pass'});
                }
            } else {
                res.render('login_form', { title: 'Login', error: 'cant find user'});
            }
        });
}