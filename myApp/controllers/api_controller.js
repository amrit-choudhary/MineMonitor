var Data_Data = require('../models/data_data');

var asysc = require('async');

exports.data_save = function (req, res) {
    res.send('data received');
};

exports.data_save_post = function (req, res) {
    var newData = new Data_Data({
        timestamp: req.body.timestamp,
        id: req.body.id,
        param1: req.body.param1,
        param2: req.body.param2,
        param3: req.body.param3,
        param4: req.body.param4,
        param5: req.body.param5,
        param6: req.body.param6,
    });

    newData.save(function (err) {
        if (err) {
            res.send('data not saved');
        } else {
            res.send('data saved');
        }
    });
}