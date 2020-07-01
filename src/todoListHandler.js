// import projectHandler from './projectHandler.js';

class TodoList {
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

  let titleInput = document.getElementById('title-input');
  let descriptionInput = document.getElementById('description-input');
  let dueDateInput = document.getElementById('due-date-input');
  let priorityInput = document.getElementById('priority-input');
  let notesInput = document.getElementById('notes-input');
  let addTodoBtn = document.getElementById('add-todo-btn');
  (function createTodoList() {
    addTodoBtn.addEventListener('click', () => {
      todos.push(new TodoList(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value));
      titleInput.value = "";
      descriptionInput.value = "";
      dueDateInput.value = "";
      priorityInput.value = "";
      notesInput.value = "";
      console.log(todos);
    });
  })();
  
  (function displayTodoList() {
    const todoListContainer = document.getElementById('todo-list-container');
    addTodoBtn.addEventListener('click', () => {
      while(todoListContainer.firstChild) {
        todoListContainer.removeChild(todoListContainer.lastChild);
      }
      for(let i = 0; i < todos.length; i++) {
        let div = document.createElement('div');
        div.classList.add('todo-container');
        for(let item in todos[i]) {
          let p = document.createElement('p');
          p.textContent = `${item}: ${todos[i][item]}`;
          div.appendChild(p);
        }
        todoListContainer.appendChild(div);
        let deleteTodoBtn = document.createElement('p');
        deleteTodoBtn.classList.add('delete-todo-btn');
        deleteTodoBtn.textContent = "DELETE";
        div.appendChild(deleteTodoBtn);
      };
    });
  })();

};

todoListHandler();
// let projects = projectHandler();
// console.log(projects);