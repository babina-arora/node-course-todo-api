var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo}= require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
      text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {app};
// var newTodo = new Todo({
//     text: 'Start Angular 2 course'
// });
//
// var newTodo1 = new Todo({
//     text: 'Cook Lunch',
//     completed:true,
//     completedAt:new Date().getTime()
// });
// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (err) => {
//     console.log('Unable to save Todo',err);
// });
//
// newTodo1.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (err) => {
//     console.log('Unable to save Todo',err);
// });