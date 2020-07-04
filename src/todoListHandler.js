class Todo {
  constructor(title, description, dueDate, priority) {
    this["Title"] = title;
    this["Description"] = description;
    this["Due Date"] = dueDate;
    this["Priority"] = priority;
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

  // (function changeTodo() {
  //   document.addEventListener('click', e => {
  //     if(e.target.classList.contains('edit-todo-btn')) {
  //       todos[Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode)] = new Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
  //     }
  //   });
  // })();

  return {
    todos: todos,
    createTodo: createTodo,
    deleteTodo: deleteTodo
  }
})();

export default todoListHandler;