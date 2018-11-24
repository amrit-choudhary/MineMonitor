var express = require('express');
var router = express.Router();

var api_contoller = require('../controllers/api_controller');

router.get('/save', api_contoller.data_save);

router.post('/save', api_contoller.data_save_post);

router.get('/getallusers', api_contoller.get_all_users);

router.get('/getServiceTime', api_contoller.get_service_time);

module.exports = router;
