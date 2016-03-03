var MongoClient = require('mongodb').MongoClient;
var stream = '';
var data ="";
MongoClient.connect('mongodb://localhost:27017/documents', function(err, db){
  if(!err) {
    console.log('we are connected');
 var collection = db.collection('employees');
collection.find().toArray(function(err, result){
  stream = collection.find().stream();
  stream.on("data",function(item){
    console.log(item);
  });
  stream.on("end", function() {
    console.log("end of data");
    collection.findOne({name:'ramesh'}, function(err, items){
      console.log(items);
    });
  });
});
}
});
