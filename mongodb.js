// CRUD operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.error('Connection failed!');
	} else {
		const db = client.db(database);
		db.collection('users').insertOne({
			name: 'Georg',
			age: 19
		});

		console.log('Successfully inserted a collection');
	}
});
