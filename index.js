const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017/", function(err, client){
 	const db = client.db("animals");
 	const collection = db.collection("dogs");
 	let dog = {name: "barbos", age: "3"}
 	collection.insertOne(dog, function(err, result){
 		if(err){
        return console.log(err);
    	}
    	// взаимодействие с базой данных
   		client.close();
 	});
});