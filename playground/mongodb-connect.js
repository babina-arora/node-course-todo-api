//const MongoClient = require('mongodb').MongoClient;
// ES 6 Object Destructuring
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('ToDos').insertOne({
       text:"Task 3",
       done:false
    }, (err, result) => {
        if (err) {
            return console.log('Failed to insert To do',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    } );
    db.collection('Users').insertOne({
        name: 'Rebekkah',
        age:26,
        location:'New Orleans'
    }, (err, result) => {
       if (err) {
           return console.log('Failed to insert user',err);
       }
        console.log(result.ops[0]._id.getTimestamp());
    });
    db.close();
});