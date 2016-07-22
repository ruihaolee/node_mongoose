var mongoose = require('mongoose');
mongoose.connect('localhost:27017/userItem');

var db = mongoose.connection;
var userSchema = new mongoose.Schema({
	username : {type: String},
	password : {type: String},
	sex : {type: String}
});
userSchema.statics.findBysex = function(sex, callback){
	return this.modle('userColl').find({sex : sex}, callback);
};

var mongooseModel = db.model('userColl', userSchema);

var addUser = function(oneUser, callback){
	console.log(oneUser);
	mongooseModel.create(oneUser, function (error){
		if (error) {
			// console.log(error);
			callback(true, error);
		}
		else {
			callback(false, {});
		}
	});
};

var getUser = function(username, callback){
	mongooseModel.find({username: username}, function (error, result){
		//modle.find(err, function(err, result));
		//回调的第二个参数是结果数组
		if (error) {
			console.log(error);
			callback(true, error);
		}
		else {
			var userParams = {
				username : '',
				password : '',
				sex : ''
			};
			var userData = result[0];
			for(var name in userParams){
				userParams[name] = userData[name];
			};
			callback(false, userParams);
		}
	});
};

exports.addUser = addUser;
exports.getUser = getUser;

