var User_Data = require('../models/user_data');

var async = require('async');

exports.user_list = function (req, res) {
    User_Data.countDocuments({}, function (err, count) {
        res.render('users', { title: count, data: count});
    });
};

exports.user_login = function (req, res) {
    res.send('Not implemented');
};