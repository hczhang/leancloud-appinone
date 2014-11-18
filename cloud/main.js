require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.beforeSave("Messages", function(request,response){
var http = require('http');  
  
var qs = require('querystring');  
  
var data = {
	"module":"GetContacts201410",
	"staffid":"21",
	"startTime":"20140619100000"
};//这是需要提交的数据  
// http://10.5.107.224:8080/interface/GetInfoService.aspx?module=GetContacts201410&staffid=21&startTime=20140619100000
  
var content = qs.stringify(data);  
  
var options = {  
    hostname: '10.5.8.13',  // 127.0.0.1
    port: 2092,  // 3000
    path: '/interface/GetInfoService.aspx?' + content,  
    method: 'GET'  
};  
  
var req = http.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
        console.log('BODY: ' + chunk);  
    });  
});  
  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
  
req.end(); 
response.success("good");
})

