var express = require('express');
var router = express.Router();

var analysis_controller = require('../controllers/analysis_controller');

router.get('/', analysis_controller.analysis_get);

module.exports = router;