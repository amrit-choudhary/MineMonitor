var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: string,
    password: string,
    level: int
});

module.exports = mongoose.model('UserModel', UserSchema);