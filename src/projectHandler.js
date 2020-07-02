function projectHandler() {
  let projects = {
    "Default List": [] 
  };
  
  const newProjectInput = document.getElementById('new-project-input');
  const newProjectBtn = document.getElementById('new-project-btn');
  const projectList = document.getElementById('project-list');
  
  (function addNewProject() {
    newProjectBtn.addEventListener('click', (e) => {
      projects[newProjectInput.value] = [];
      newProjectInput.value = "";
    });
  })();

  (function displayProjectList() {
    for(let listName in projects) {
      let p = document.createElement('p');
      p.textContent = listName;
      projectList.appendChild(p);
    }
    newProjectBtn.addEventListener('click', () => {
      while(projectList.lastChild) {
        projectList.removeChild(projectList.firstChild);
      }
      for(let listName in projects) {
        let p = document.createElement('p');
        p.textContent = listName;
        projectList.appendChild(p);
      }
      console.log(projects);
    });
  })();
  return projects;
};

export default projectHandler;