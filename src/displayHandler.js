import projectHandler from './projectHandler.js';
import todoListHandler from './todoListHandler.js';


function projectsDisplayHandler() {
  let projects = projectHandler.projects;
  const projectList = document.getElementById('project-list');
  const todoContainerH2 = document.querySelector('#current-todos>h2');

  (function displayProject() {
    projectList.addEventListener('click', e => {
      const project = Array.from(projectList.querySelectorAll('div'));
      const projectIndex = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
      todoContainerH2.textContent = project[projectIndex].firstChild.textContent;
      for(let i = 0; i < Array.from(project).length; i++) {
        if(project[i].id === 'active') {
          project[i].removeAttribute('id');
        }
      };
      e.target.parentNode.id = 'active';
    });
  })();

  (function displayProjectList() {
    const newProjectBtn = document.getElementById('new-project-btn');
    displayList();
    
    (function displayNewProject() {
      newProjectBtn.addEventListener('click', () => {
        const activeProject = document.getElementById('active').firstChild.textContent;
        projectHandler.addNewProject();
        displayList();
        todoContainerH2.textContent = activeProject;
      });
    })();

    (function deleteProject() {
      projectList.addEventListener('click', e => {
        if(e.target.classList.contains('delete-project-btn')) {
          projectHandler.deleteProject(e.target.previousSibling.textContent);
          displayList();
        }
      });
    })();

    function displayList() {
      while(projectList.lastChild) {
        projectList.removeChild(projectList.firstChild);
      };
      for(let listName in projects) {
        let div = document.createElement('div');
        let listNameP = document.createElement('p');
        let deleteProjectP = document.createElement('p');
        listNameP.textContent = listName;
        if(document.querySelector('#active') == null) {
          div.id = 'active';
          todoContainerH2.textContent = listName;
        }
        div.appendChild(listNameP);
        if(Object.keys(projects).length > 1) {
          deleteProjectP.textContent = "x";
          deleteProjectP.classList.add('delete-project-btn');
          div.appendChild(deleteProjectP);
        }
        projectList.appendChild(div);
      };
    };
  })();
};

function todoListDisplayHandler() {
  let projects = projectHandler.projects;
  let todos = todoListHandler.todos;

  (function displayNewTodos() {
    const addTodoBtn = document.getElementById('add-todo-btn');
    addTodoBtn.addEventListener('click', () => {
      let activeProject = document.getElementById('active').firstChild.textContent;
      todoListHandler.createTodo();
      let createTodoInputs = Array.from(document.getElementById('create-todo-container').querySelectorAll('input'));
      for(let i = 0; i < createTodoInputs.length; i++) {
        if(createTodoInputs[i].value === "") {
          for(let j = 0; j < createTodoInputs.length; j++) {
            createTodoInputs[j].value = "";
          }
          return;
        }
        createTodoInputs[i].value = "";
      }
      projects[activeProject].push(todos[todos.length - 1]);
      displayTodos();
    });
  })();

  (function editTodo() {
    document.addEventListener('click', e => {
      if(e.target.classList.contains('edit-todo-btn')) {
        const todoIndex = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        let activeProject = document.getElementById('active').firstChild.textContent;
        let createTodoInputs = Array.from(document.getElementById('create-todo-container').querySelectorAll('input'));
        todoListHandler.editTodo(todoIndex);
        for(let i = 0; i < createTodoInputs.length; i++) {
          if(createTodoInputs[i].value === "") {
            for(let j = 0; j < createTodoInputs.length; j++) {
              createTodoInputs[j].value = "";
            }
            return;
          }
          createTodoInputs[i].value = "";
        }
        projects[activeProject][todoIndex] = todos[todoIndex];
      };
    });
  })();

  (function deleteTodo() {
    document.addEventListener('click', e => {
      if(e.target.classList.contains('delete-todo-btn')) {
        const todoIndex = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        let activeProject = document.getElementById('active').firstChild.textContent;
        todoListHandler.deleteTodo(todoIndex);
        projects[activeProject].splice(todoIndex, 1);
      };
      displayTodos();
    });
  })();  

  function displayTodos() {
    const todoListContainer = document.getElementById('todo-list-container');
    let activeProject = document.getElementById('active').firstChild.textContent;
    while(todoListContainer.firstChild) {
      todoListContainer.removeChild(todoListContainer.lastChild);
    };
    for(let i = 0; i < projects[activeProject].length; i++) {
      let div = document.createElement('div');
      div.classList.add('todo-container');
      for(let item in projects[activeProject][i]) {
        let p = document.createElement('p');
        if(item === "Title" || item === "Description") {
          p.textContent = `${projects[activeProject][i][item]}`;
        } else {
          p.textContent = `${item}: ${projects[activeProject][i][item]}`;
        }
        div.appendChild(p);
      };
      let editTodoBtn = document.createElement('p');
      editTodoBtn.classList.add('edit-todo-btn');
      editTodoBtn.textContent = "EDIT";
      div.appendChild(editTodoBtn);
      let deleteTodoBtn = document.createElement('p');
      deleteTodoBtn.classList.add('delete-todo-btn');
      deleteTodoBtn.textContent = "DELETE";
      div.appendChild(deleteTodoBtn);
      todoListContainer.appendChild(div);
    };
  };
};



projectsDisplayHandler();
todoListDisplayHandler();