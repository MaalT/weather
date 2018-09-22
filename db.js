var MongoClient = require('mongodb').MongoClient;
MongoClient = { useNewUrlParser: true };
//Create a database named "mydb":
var url = "mongodb://localhost:3000/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

