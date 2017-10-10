const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    //find by id : new ObjectID('59d78b202be22a1440098c25')
    db.collection('ToDos').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Failed to fetch', err);
    });
    //db.close();
});