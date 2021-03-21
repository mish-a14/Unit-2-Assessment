var express = require('express');
var router = express.Router();

let todos = [
    {todos: "example to do", 
    done: false}, 
    {todos: 'gonna celebrate a bday tonight', 
    done: true}
]


module.exports= {
    todos: todos
}