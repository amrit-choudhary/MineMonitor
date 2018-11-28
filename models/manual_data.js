var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ManualDataSchema = new Schema({
    timestamp: Date,
    sourceName: String,
    value: Number
});

module.exports = mongoose.model('ManualDataModel', ManualDataSchema);