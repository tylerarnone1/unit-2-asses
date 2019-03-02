var Todo = require('../models/to-do');

module.export = {
    index, 
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update

};

function update(req, res){
    req.body.done = req.body.done == 'on';
    Todo.update(req.params.id, req.body);
    res.redirect('/todos');
};

function edit(req, res){
    res.render('todos/edit', {
        todo: Todo.getOne(req.params.id),
        idx: req.params.id
      });
    }
    
    function deleteTodo(req, res) {
      Todo.deleteOne(req.params.id);
      res.redirect('/todos');
    }
    
    function create(req, res) {
      console.log(req.body);
      req.body.done = false;
      Todo.create(req.body);
      res.redirect('/todos');
    }
    
    function newTodo(req, res) {
      res.render('todos/new');
    }
    
    function index(req, res) {
      res.render('todos/index', {
        todos: Todo.getAll(),
        time: req.time
      });
    }
    
   
    
