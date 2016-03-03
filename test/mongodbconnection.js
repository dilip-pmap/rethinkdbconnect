
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


  var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the document collection");
      callback(result);
    });
  }

  var updateDocument = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a : 2 }
      , { $set: { b : 1 } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
  }



  var deleteDocument = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.deleteOne({ a : 3 }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });
  }


  var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    assert.equal(2, docs.length);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}
// Connection URL
var url = 'mongodb://localhost:27017/documents';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
   updateDocument(db, function() {
     deleteDocument(db, function() {
       findDocuments(db, function() {
         db.close();
       });
     });
   });
 });
});


var MongoClient = require('mongodb').MongoClient;
var employeeDetails =   MongoClient.connect('mongodb://localhost:27017/documents', function(err, db){
    if(!err) {
      console.log('we are connected');
      var collection = db.collection('employees');
      collection.find({firstname : 'dilip'}).toArray(function(err, result){
    //  console.log(result);
    //  EMPLOYEEEDEATILs = JSON.stringify(result);
    //  res.send(JSON.stringify(result));
return JSON.stringify(result);
    });
  }
  });
module.exports = employeeDetails;
