require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.beforeSave("Messages", function(request,response){
	var message = request.object.get("data");

	AV.Cloud.httpRequest({
	  method: 'GET',
	  url: 'http://183.247.151.178:2090/interface/GetInfoService.aspx',
	  params: {
		'module':'SyncMessage',
		'data':message
	  },
	  success: function(httpResponse) {
	    console.log(httpResponse.text);
	  },
	  error: function(httpResponse) {
	    console.error('Request failed with response code ' + httpResponse.status);
	  }
	});

	response.success();
})

