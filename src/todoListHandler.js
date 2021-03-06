class Todo {
  constructor(title, description, dueDate, priority) {
    this["Title"] = title;
    this["Description"] = description;
    this["Due Date"] = dueDate;
    this["Priority"] = priority;
    this["Completed"] = false;
  };
};


const todoListHandler = (function() {
  let todos = [];
  let titleInput = document.getElementById('title-input');
  let descriptionInput = document.getElementById('description-input');
  let dueDateInput = document.getElementById('due-date-input');
  let priorityInput = document.getElementById('priority-input');

  const createTodo = function() {
    todos.push(new Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value));
  };
  
  const deleteTodo = function(todoIndex) {
    todos.splice([todoIndex], 1);
  };

  const editTodo = function(todoIndex) {
    todos[todoIndex] = new Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
  };

  const toggleCompleted = function(todoIndex) {
    todos[todoIndex]["Completed"] = !todos[todoIndex]["Completed"];
  };

  return {
    todos: todos,
    createTodo: createTodo,
    editTodo: editTodo,
    deleteTodo: deleteTodo,
    toggleCompleted: toggleCompleted
  }
})();

export default todoListHandler;