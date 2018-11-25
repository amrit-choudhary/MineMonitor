var express = require('express');
var router = express.Router();

var logs_controller = require('../controllers/logs_controller');

router.get('/', logs_controller.show_logs);

module.exports = router;