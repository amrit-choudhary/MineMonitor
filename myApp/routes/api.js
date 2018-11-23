var express = require('express');
var router = express.Router();

var api_contoller = require('../controllers/api_controller');

router.get('/save', api_contoller.data_save);

router.post('/save', api_contoller.data_save_post);

module.exports = router;
