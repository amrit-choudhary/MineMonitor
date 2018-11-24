var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DataSchema = new Schema({
    timestamp: Date,
    id: Number,
    param1: Number,
    param2: Number,
    param3: Number,
    param4: String,
    param5: String,
    param6: String
});

module.exports = mongoose.model('DataModel', DataSchema);