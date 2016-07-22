var res_json = function (res, err, data){
	if (err) {
		res.jsonp({
			error : true,
			data : err
		});		
	}
	else{
		res.jsonp({
			error : false,
			data : data
		});
		//res.jsonp既可以jsonp也可以json
	}
};
module.exports = res_json;