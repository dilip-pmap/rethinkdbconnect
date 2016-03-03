
var r =require('rethinkdbdash')({
host: 'localhost',
port: 28015,
db: 'test'
// authKey: 'O6wPPCIm314je8UJQcIXJjKvpkKLsb5ecgqRc0ZDGGk'
// ssl: true
});

r.tableCreate('Employee').run().then(function(response){
  console.log(response);

  // insert details
  r.table("Employee").insert({
    name: "dilip",
    company: "ProcessMAP"
  }).run().then(function(response){
    console.log('successfully inserted details');

    // Get details
    r.table('Employee').run().then(function(response){
      console.log(response);
    }).error(function(err){
      console.log(err);
    })

    // end get details

  }).error(function(err){
    console.log('error occured',err);
  })

  // end insert
})
. error(function(err){
  console.log('error occured', err);
});
