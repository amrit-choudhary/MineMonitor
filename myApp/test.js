
var async = require('async');
var user_data = require('./models/user_data');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/user_list', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error: '));

var user_data1 = new user_data({
    username: 'admin',
    password: 'pass',
    level: 1
});

function createUser(name, pass, level, cb){
    var user_data1 = new user_data({
        username: name,
        password: pass,
        level: level
    });

    user_data1.save(function (err) {
        if (err) {
          cb(null, pass);
          return;
        }
        console.log('New User: ' + user_data1);
        cb(null, pass);
      }  );
}

async.series(
    [
        function(callback){
            createUser('admin', 'pass', 1, callback);
        },
        function(callback){
            createUser('dev', 'pass', 1, callback);
        }
    ],
    function(err){
        mongoose.connection.close();
    }
);
