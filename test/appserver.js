var express = require('express');
var http = require('http');
var app = express();

//app.configure(function(){
 //app.set('port', 8080);
//});

app.get('/', function(req, res){
 res.writeHead(200, {'content-type': 'text/plain'});
 res.write('clientid: ' + req.query.clientid + '\n');
 res.write('locationid: ' + req.query.locationid + '\n');
 res.write('moduleid: ' + req.query .moduleid+ '\n');
 queryStuff = JSON.stringify(req.query);
 res.end('Json Format of querystring'  + '\n' + queryStuff);
});

//http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
//})

app.listen(9080, function () {
  console.log('Example app listening on port 9080!');
});
