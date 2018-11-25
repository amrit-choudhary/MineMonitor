var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('About page');
})

router.post('/', function(req, res){
    res.send('About page, post');
})

router.get('/:param1/:param2/:param3', function(req, res){
    res.send(req.params);
})

module.exports = router;