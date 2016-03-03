var MongoClient = require('mongodb').MongoClient;

var express = require('express')
var app = express();

app.get('/answers', function (req, res){
  MongoClient.connect('mongodb://localhost:27017/documents', function(err, db){
    if(!err) {
      console.log('we are connected');
      var collection = db.collection('employees');
      collection.find({firstname : 'dilip'}).toArray(function(err, result){
      console.log(result);
      EMPLOYEEEDEATILs = JSON.stringify(result);
      res.send(JSON.stringify(result));

    });
  }
  });
});


//
//   var query = 'query { employeedetails { id, firstname, lastname, designation, active, fullname } }'
//
// graphql(Schema, query).then( function(result) {
//   console.log(JSON.stringify(result, null, " "));
// });
app.listen(8081, function(result) {
  console.log('GraphQL server is now running on localhost:8081')
});

//  console.log(employees);
//   , assert = require('assert');
// var stream = '';
// var data = '';
//  });
// stream = collection.find().stream();
// stream.on("data",function(item){
//  stream.on("end", function() {
//    console.log("end of data");
//    console.log(data);
//  });
