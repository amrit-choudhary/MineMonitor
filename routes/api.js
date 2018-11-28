var express = require('express');
var router = express.Router();

var api_contoller = require('../controllers/api_controller');

router.post('/login', api_contoller.login);

router.get('/save', api_contoller.data_save);

router.post('/save', api_contoller.data_save_post);

router.post('/postSensor', api_contoller.sensor_data_save_post);

router.post('/postManual', api_contoller.manual_data_save_post);

router.get('/getallusers', api_contoller.get_all_users);

router.get('/getServiceTime', api_contoller.get_service_time);

router.get('/getSensorData', api_contoller.get_sensor_data);

router.get('/getManualData', api_contoller.get_manual_data);

router.get('/deleteSensorData', api_contoller.delete_sensor_data);

router.get('/deleteManualData', api_contoller.delete_manual_data);

module.exports = router;
