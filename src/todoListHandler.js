

class Todo {
  constructor(title, description, dueDate, priority, notes = "") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
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
  let notesInput = document.getElementById('notes-input');

  (function createTodo() {
    addTodoBtn.addEventListener('click', () => {
      todos.push(new Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value));
      titleInput.value = "";
      descriptionInput.value = "";
      dueDateInput.value = "";
      priorityInput.value = "";
      notesInput.value = "";
    });
  })();
  
  
  (function deleteTodo() {
    todoListContainer.addEventListener('click', e => {
      if(e.target.classList.contains('delete-todo-btn')) {
        let todoIndex = (Array.from(e.target.parentNode.parentNode.children)).indexOf(e.target.parentNode);
        todos.splice([todoIndex], 1);
      }
    });
  })();
  return todos;
};

export default todoListHandler;