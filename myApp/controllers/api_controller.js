var Data_Data = require('../models/data_data');

var asysc = require('async');

exports.data_save = function(req, res){
    res.send('data received');
};

exports.data_save_post = function(req, res){
    console.log(req.body);
    res.send('data received post');
}