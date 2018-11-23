var express = require('express');
var router = express.Router();

var user_data_controller = require('../controllers/user_data_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', user_data_controller.user_list);

router.get('/login', user_data_controller.user_login);

module.exports = router;
