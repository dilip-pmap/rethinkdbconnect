var r =require('rethinkdb');
var connection = null;


r.connect( {host: 'localhost', port: 28015, db: 'test'}, function(err, conn) {
    if (err) throw err;
    connection = conn;
    console.log(conn);
})

console.log(r.http("localhost:8080/test/employee"));
// var url = require('url');
// var rethinkClient= r.RethinkClient

// var rethinkdburl='rethinkdb://shiba:shiba@123@aws-us-east-1-portal.4.dblayer.com:10950';



// console.log(r.http('rethinkdb://shiba:shiba@123@aws-us-east-1-portal.4.dblayer.com:10950/pmap').table('document'));
