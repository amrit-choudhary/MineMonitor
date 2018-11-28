var express = require('express');
var router = express.Router();

var view_controller = require('../controllers/view_controller');

router.get('/sensor', view_controller.showSensorGraph);

router.get('/manual', view_controller.showManualGraph);

module.exports = router;