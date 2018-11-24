var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    level: Number,
    first_name: String,
    last_name: String
});

module.exports = mongoose.model('UserModel', UserSchema);