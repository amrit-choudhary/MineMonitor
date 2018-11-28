var Data_Data = require('../models/data_data');
var Manual_Data = require('../models/manual_data');
var Sensor_Data = require('../models/sensor_data');
var User_Data = require('../models/user_data');

var asysc = require('async');

exports.login = function (req, res) {
    res.send('Success');
}

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

exports.manual_data_save_post = function (req, res) {
    var manual_data = new Manual_Data({
        timestamp: req.body.timestamp,
        sourceName: req.body.sourceName,
        value: req.body.value
    });

    manual_data.save(function (err) {
        if (err) {
            res.send('data not saved');
        } else {
            res.send('data saved');
        }
    });
}

exports.get_sensor_data = function (req, res) {
    Sensor_Data.find({}, { 'value': 1 })
        .exec(function (err, sensor_values) {
            if (err) {
                res.send(err);
            } else {
                res.send(JSON.stringify(sensor_values));
            }
        });
}

exports.get_manual_data = function (req, res) {
    Manual_Data.find({}, { 'value': 1 })
        .exec(function (err, manual_values) {
            if (err) {
                res.send(err);
            } else {
                res.send(JSON.stringify(manual_values));
            }
        });
}

exports.delete_sensor_data = function (req, res) {
    Sensor_Data.deleteMany({}, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send('all sensor data delete');
        }
    });
}

exports.delete_manual_data = function (req, res) {
    Manual_Data.deleteMany({}, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send('all manual data delete');
        }
    });
}