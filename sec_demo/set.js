var mongo = require('../mongo/mongo');

var setUser = function (userData, callback){
	mongo.addUser(userData, callback);
};
module.exports = setUser;