var Data_Data = require('../models/data_data');

var async = require('async');

exports.show_logs = function (req, res) {
    var query = Data_Data.find({});
    query.exec(function (err, logs_list) {
        if (err) {
            res.send('cant show logs');
        } else {
            res.render('logs', { logs: logs_list });
        }
    })
};