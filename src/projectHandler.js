const projectHandler = (function() {
  let projects = {
    "Default List": [] 
  };
  
  
  
  const addNewProject = function() {
    const newProjectInput = document.getElementById('new-project-input');
    if(newProjectInput.value !== "") {
      projects[newProjectInput.value] = [];
      newProjectInput.value = "";
    };
  };

  const deleteProject = function(projectName) {
    delete projects[projectName];
  };

  return { 
    projects: projects,
    addNewProject: addNewProject,
    deleteProject: deleteProject
  }

})();

export default projectHandler;