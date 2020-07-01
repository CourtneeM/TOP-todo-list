import projectHandler from './projectHandler.js';

class TodoList {
  constructor(title, description, dueDate, priority, notes = "") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  };
};


function createTodoList() {
  const titleInput = document.getElementById('title-input');
  const descriptionInput = document.getElementById('description-input');
  const dueDateInput = document.getElementById('due-date-input');
  const priorityInput = document.getElementById('priority-input');
  const notesInput = document.getElementById('notes-input');
  const addTodoBtn = document.getElementById('add-todo-btn');
  addTodoBtn.addEventListener('click', () => {
    let todo = new TodoList(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value);
    console.log(todo);
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
    notesInput.value = "";
  });
}

createTodoList();
let projects = projectHandler();
console.log(projects);