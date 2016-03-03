var sys= require('util'), url = require('url'), http = require('http'), qs = require('querystring')
var express = require('express');

var app = http.createServer(

function(request, response) {

  if(request.method == 'POST'){
    var body='';
    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function(){
      var POST = qs.parse(body);
      console.log(POST);
      response.writeHead(200);
      response.write( JSON.stringify(POST));
      response.end();
    });

  }

  else if (request.method == 'GET'){
    var url_parts = url.parse(request.url,true);
    console.log(url_parts);
    response.writeHead(200);
    response.write(JSON.stringify(url_parts.query));
  //  response.write(url_parts.query.clientid);
  //  response.write(url_parts.query.locationid);
  //  response.write(url_parts.query.moduleid);
    response.end();
  }


}

);

app.listen(9080);
