var Sensor_Data = require('../models/sensor_data');

var async = require('async');

exports.showSensorGraph = function (req, res) {
    res.render('sensor');
};

exports.showManualGraph = function (req, res) {
    res.render('manual');
};