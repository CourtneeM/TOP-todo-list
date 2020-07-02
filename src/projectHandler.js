function projectHandler() {
  let projects = {
    "Default List": [] 
  };
  
  const newProjectInput = document.getElementById('new-project-input');
  const newProjectBtn = document.getElementById('new-project-btn');
 
  
  (function addNewProject() {
    newProjectBtn.addEventListener('click', (e) => {
      projects[newProjectInput.value] = [];
      newProjectInput.value = "";
    });
  })();

  return projects;
};

export default projectHandler;