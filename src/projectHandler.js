let projects = {
  defaultList: [] 
};

function projectHandler() {
  
  (function addNewProject() {
    const newProjectInput = document.getElementById('new-project-input');
    const newProjectBtn = document.getElementById('new-project-btn');
    const projectList = document.getElementById('project-list');
    newProjectBtn.addEventListener('click', () => {
      let p = document.createElement('p');
      projects[newProjectInput.value] = [];
      p.textContent = newProjectInput.value;
      projectList.appendChild(p);
      newProjectInput.value = "";
      console.log(projects);
    });
  })();
  return projects;
};

export default projectHandler;