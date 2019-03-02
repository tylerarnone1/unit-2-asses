


const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Unit 2 Assessment', done: false},
    {todo: 'Walk dog', done: false},
  ];
  
  
  function update(id, todo) {
    todos.splice(id, 1, todo);
  }
  
  function deleteOne(id) {
    todos.splice(id, 1);
  }
  
  function create(todo) {
    todos.push(todo);
  }
  
  function getOne(id) {
    return todos[id];
  }
  
  function getAll() {
    return todos;
  }

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };