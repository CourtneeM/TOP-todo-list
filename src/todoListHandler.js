

class Todo {
  constructor(title, description, dueDate, priority) {
    this["Title"] = title;
    this["Description"] = description;
    this["Due Date"] = dueDate;
    this["Priority"] = priority;
  };
};


function todoListHandler() {
  let todos = [];
  const addTodoBtn = document.getElementById('add-todo-btn');
  const todoListContainer = document.getElementById('todo-list-container');
  let titleInput = document.getElementById('title-input');
  let descriptionInput = document.getElementById('description-input');
  let dueDateInput = document.getElementById('due-date-input');
  let priorityInput = document.getElementById('priority-input');

  (function createTodo() {
    addTodoBtn.addEventListener('click', () => {
      if (titleInput.value === "" || descriptionInput.value === "" || dueDateInput.value === "" || priorityInput.value === "") {
        return;
      } else {
        todos.push(new Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value));
      };
    });
  })();
  
  (function deleteTodo() {
    todoListContainer.addEventListener('click', e => {
      if(e.target.classList.contains('delete-todo-btn')) {
        let todoIndex = (Array.from(e.target.parentNode.parentNode.children)).indexOf(e.target.parentNode);
        todos.splice([todoIndex], 1);
      };
    });
  })();
  return todos;
};

export default todoListHandler;