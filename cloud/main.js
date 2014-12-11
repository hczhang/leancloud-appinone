require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
	response.success("Hello world!");
});

AV.Cloud.afterSave("Messages", function(request){
	var message = request.object.get('data');

	AV.Cloud.httpRequest({
	  method: 'POST',
	  url: 'http://183.247.151.178:2090/appinone/interface/GetInfoService.aspx?module=SyncMessage',
		
		headers: {
			//'Content-Type': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},

		body: message,
	  success: function(httpResponse) {
			console.log(message);
			console.log(httpResponse.status + ":" + httpResponse.text);
	  },
	  error: function(httpResponse) {
			console.log(httpResponse);
	    console.error('Request failed with response code ' + httpResponse.status);
	  }
	});

	//response.success();
});

AV.Cloud.afterSave("_Installation", function(request){
	var tokenid = request.object.get('installationId');
	var staffid = request.object.get('staffId');
	var debug = 1;
	var kind = 'android';

	AV.Cloud.httpRequest({
	  method: 'POST',
	  url: 'http://183.247.151.178:2090/appinone/interface/GetInfoService.aspx?module=SetTokenId',
				
		params: {
		  tokenid:tokenid, staffid:staffid, debug:debug, kind:kind
		},

		headers: {
			//'Content-Type': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},

		//body: '',
	  success: function(httpResponse) {
			console.log(tokenid);
			console.log(httpResponse.status + ":" + httpResponse.text);
	  },
	  error: function(httpResponse) {
			console.log(httpResponse);
	    console.error('Request failed with response code ' + httpResponse.status);
	  }
	});

	//response.success();
});