import projectHandler from './projectHandler.js';

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
      console.log(todos);
    });
    displayTodoList();
  })();
  
  
  (function deleteTodo() {
    todoListContainer.addEventListener('click', e => {
      if(e.target.classList.contains('delete-todo-btn')) {
        let todoIndex = (Array.from(e.target.parentNode.parentNode.children)).indexOf(e.target.parentNode);
        todos.splice([todoIndex], 1);
        displayTodoList();
      }
      console.log(todos);
    });
  })();
  
  function displayTodoList() {
    document.addEventListener('click', e => {
      if(e.target.id === 'add-todo-btn' || e.target.classList.contains('delete-todo-btn')) {
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
      };
    });
  };
};

// let projects = projectHandler();
// console.log(projects["Default List"]);

export default todoListHandler;