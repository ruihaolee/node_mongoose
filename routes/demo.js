var express = require('express');
var json = require('../sec_demo/res_json');
var set = require('../sec_demo/set');
var get = require('../sec_demo/get');
var router = express.Router();
//规定二级路由
router.use('/get', function (req, res) {
	var username = req.param('username');
	get(username, function(err, data){
		json(res, err, data);
	});
});
router.use('/set', function (req, res){
	var username = req.param('username');
	var password = req.param('password');
	var sex = req.param('sex');
	var userData = {
		username : username,
		password : password,
		sex : sex
	};
	set(userData, function(err, data){
		json(res, err, data);
	});
});

module.exports = router;