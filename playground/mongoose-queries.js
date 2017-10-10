const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

var id = '59dcc4d470a41e60212b5206';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}, (err) => {
    console.log('Failed to get Todos');
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos findOne', todo);
}, (err) => {
    console.log('Failed to get Todos');
});

Todo.findById({
    _id: id
}).then((todo) => {
    if (!todo) {
        return console.log('Todo not found');
    }
    console.log('Todos findById', todo);
}, (err) => {
    console.log('Failed to get Todos');
}).catch((exc) => {
    //Object Id validation
    console.log(exc);
})
