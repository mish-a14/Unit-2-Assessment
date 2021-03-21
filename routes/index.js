var express = require('express');
var router = express.Router();

//let todos = require('../data/todos.js')


let todos = [
  {todos: "example to do", 
  done: false}, 
  {todos: 'gonna celebrate a bday tonight', 
  done: true}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unit 2 Assessment'});
});


router.post('/submit', async function(req, res) {
  console.log(req.body.todos)
  let userSubmission = {todos: req.body.todos, done: false}
  todos.push(userSubmission)
  res.render('submit.ejs', {todos: todos})
})



module.exports = router;


