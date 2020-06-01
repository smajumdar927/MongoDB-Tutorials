//Mongoose
const mogoose = require('mongoose');

mogoose.connect('mongodb://localhost:27017/fruitsDB', {
	useUnifiedTopology: true,
});

const fruitSchema = new mogoose.Schema({
	name: String,
	score: Number,
	review: String,
});

const Fruit = mogoose.model('Fruit', fruitSchema);

// const fruit = new Fruit({
//     name: 'Apple',
//     score: 8,
//     review: 'A great fruit'
// })

// fruit.save()

const personSchema = new mogoose.Schema({
	name: String,
	age: Number,
	address: String,
});

const Person = mogoose.model('Person', personSchema);

const person = new Person({
	name: 'Rony',
	age: 34,
	address: 'New York',
});

person.save();

const mango = new Fruit({
	name: 'Mango',
	score: 9,
	review: 'sweet and sour',
});
const orange = new Fruit({
	name: 'Orange',
	score: 4,
	review: 'Sour',
});
const banana = new Fruit({
	name: 'Banana',
	score: 5,
	review: 'Ripe',
});
// Fruit.insertMany([mango,orange,banana], function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('New fruit inserted successfully')
//     }
// })

Fruit.find(function (err, fruits) {
	if (err) {
		console.log(err);
	} else {
		// console.log(fruits)
		fruits.forEach(function (fruit) {
			console.log(fruit.name);
		});
	}
	mogoose.connection.close();
});

//Native driver
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
// client.connect(function (err) {
// 	assert.equal(null, err);
// 	console.log('Connected successfully to server');

//     const db = client.db(dbName);

//     // insertDocuments(db, function() {
//     //     client.close();
//     //   });
//     findDocuments(db, function() {
//         client.close();
//       });
// });

// const insertDocuments = function (db, callback) {
// 	// Get the documents collection
// 	const collection = db.collection('fruits');
// 	// Insert some documents
// 	collection.insertMany(
// 		[
// 			{ name: 'Apple', score: 8, review: 'Great Fruit' },
// 			{ name: 'Orange', score: 7, review: 'Sour Fruit' },
// 			{ name: 'Banana', score: 6, review: 'Protein Fruit' },
// 		],
// 		function (err, result) {
// 			assert.equal(err, null);
// 			assert.equal(3, result.result.n);
// 			assert.equal(3, result.ops.length);
// 			console.log('Inserted 3 documents into the collection');
// 			callback(result);
// 		}
// 	);
// };

// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(fruits)
//       callback(fruits);
//   }
//     });
