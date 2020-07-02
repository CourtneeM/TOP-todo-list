import projectHandler from './projectHandler.js';
import todoListHandler from './todoListHandler.js';

function displayHandler() {
  let projects = projectHandler();
  let todos = todoListHandler();
  const projectList = document.getElementById('project-list');

  (function displayProject() {
    const todoContainerH2 = document.querySelector('#current-todos>h2')
    todoContainerH2.textContent = "Default List";
    projectList.addEventListener('click', e => {
      const project = projectList.querySelectorAll('p');
      const projectIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
      const selectedProjectName = project[projectIndex].textContent;

      for(let i = 0; i < Array.from(project).length; i++) {
        if(project[i].id === 'active') {
          project[i].removeAttribute('id');
        }
      };

      e.target.id = 'active';
      todoContainerH2.textContent = selectedProjectName;
    });
  })();

  (function displayProjectList() {
    const newProjectBtn = document.getElementById('new-project-btn');
    for(let listName in projects) {
      let p = document.createElement('p');
      p.textContent = listName;
      p.id = 'active';
      projectList.appendChild(p);
    };
    newProjectBtn.addEventListener('click', () => {
      let activeProject = document.getElementById('active');
      while(projectList.lastChild) {
        projectList.removeChild(projectList.firstChild);
      }
      for(let listName in projects) {
        let p = document.createElement('p');
        p.textContent = listName;
        if(activeProject.textContent === listName) {
          p.id = "active";
        }
        projectList.appendChild(p);
      }
    });
  })();

  (function displayTodos() {
    const todoListContainer = document.getElementById('todo-list-container');
    document.addEventListener('click', e => {
      if(e.target.id === 'add-todo-btn' || e.target.classList.contains('delete-todo-btn') || e.target.id === 'active') {
        let activeProject = document.getElementById('active').textContent;
        if(e.target.id === 'add-todo-btn') {
          projects[activeProject].push(todos[todos.length - 1]);
        };
        console.log(projects);
        while(todoListContainer.firstChild) {
          todoListContainer.removeChild(todoListContainer.lastChild);
        };
        for(let i = 0; i < projects[activeProject].length; i++) {
          let div = document.createElement('div');
          div.classList.add('todo-container');
          for(let item in projects[activeProject][i]) {
            let p = document.createElement('p');
            p.textContent = `${item}: ${projects[activeProject][i][item]}`;
            div.appendChild(p);
          };
          todoListContainer.appendChild(div);
          let deleteTodoBtn = document.createElement('p');
          deleteTodoBtn.classList.add('delete-todo-btn');
          deleteTodoBtn.textContent = "DELETE";
          div.appendChild(deleteTodoBtn);
        };
      };
    });
  })();
}

displayHandler();