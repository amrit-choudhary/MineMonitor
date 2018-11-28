var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SensorDataSchema = new Schema({
    timestamp: Date,
    sensorName: String,
    value: Number
});

module.exports = mongoose.model('SensorDataModel', SensorDataSchema);