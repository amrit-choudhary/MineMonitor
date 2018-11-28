var Data_Data = require('../models/data_data');
var Sensor_Data = require('../models/sensor_data');
var User_Data = require('../models/user_data');

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

exports.get_all_users = function (req, res) {
    User_Data.find({})
        .exec(function (err, list_users) {
            if (err) {
                console.log(err);
            } else {
                res.render('analysis', { title: 'Analysis', dataExt: JSON.stringify(list_users) });
            }
        });
}

exports.get_service_time = function (req, res) {
    Data_Data.find({})
        .exec(function (err, list_data) {
            if (err) {
                console.log(err);
            } else {
                res.render('analysis2', { title: 'Analysis', dataExt: JSON.stringify(list_data) });
            }
        });
}

exports.sensor_data_save_post = function (req, res) {
    var sensor_data = new Sensor_Data({
        timestamp: req.body.timestamp,
        sensorName: req.body.sensorName,
        value: req.body.value
    });

    sensor_data.save(function (err) {
        if (err) {
            res.send('data not saved');
        } else {
            res.send('data saved');
        }
    });
}