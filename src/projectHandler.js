function projectHandler() {
  let projects = {
    "Default List": [] 
  };
  
  
  
  (function addNewProject() {
    const newProjectBtn = document.getElementById('new-project-btn');
    const newProjectInput = document.getElementById('new-project-input');
    newProjectBtn.addEventListener('click', (e) => {
      if(newProjectInput.value !== "") {
        projects[newProjectInput.value] = [];
        newProjectInput.value = "";
      }
    });
  })();

  (function deleteProject() {
    const projectList = document.getElementById('project-list');
    projectList.addEventListener('click', e => {
      if(e.target.textContent === "x") {
        delete projects[e.target.previousSibling.textContent];
      };
      console.log(projects);
    });
  })();

  return projects;
};

export default projectHandler;