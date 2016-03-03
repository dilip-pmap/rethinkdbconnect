


var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MONGODB_URI = 'mongodb://localhost:27017/documents';

app.get('/', function(req, res) {

  // BAD! Creates a new connection pool for every request

  mongodb.MongoClient.connect(MONGODB_URI, function(err, db) {
  if(err) throw err;

  var coll = db.collection('employees');

    coll.find({}, function(err, docs) {
      docs.each(function(err, doc) {
        if(doc) {
          res.write(JSON.stringify(doc) + "\n");
        }
        else {
          res.end();
        }
      });
    });
  });
});

// App may initialize before DB connection is ready

app.listen(3000);
console.log('Listening on port 3000');
