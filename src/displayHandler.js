import projectHandler from './projectHandler.js';
import todoListHandler from './todoListHandler.js';

function displayHandler() {
  (function displayProjects() {
    let projects = projectHandler();
    const projectList = document.getElementById('project-list');
    const todoContainerH2 = document.querySelector('#current-todos>h2')
    todoContainerH2.textContent = "Default List";
    projectList.addEventListener('click', e => {
      const project = projectList.querySelectorAll('p');
      const projectIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
      const selectedProjectName = project[projectIndex].textContent;
      todoContainerH2.textContent = selectedProjectName;
      console.log(projects[selectedProjectName]);
    });
  })();

  (function displayTodoList() {
    let todos = todoListHandler();
    const todoListContainer = document.getElementById('todo-list-container');
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
        console.log(todos);
      };
    });
  })();
}

displayHandler();