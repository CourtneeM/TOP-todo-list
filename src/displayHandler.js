import projectHandler from './projectHandler.js';
import todoListHandler from './todoListHandler.js';

function displayHandler() {
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
}


displayHandler();
todoListHandler();
let projects = projectHandler();