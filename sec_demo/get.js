var mongo = require('../mongo/mongo');

var getUser = function (username, callback){
	mongo.getUser(username, callback);
};
module.exports = getUser;