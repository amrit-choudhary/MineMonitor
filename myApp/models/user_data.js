var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    level: Number
});

module.exports = mongoose.model('UserModel', UserSchema);