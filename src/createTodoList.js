let projectManager = {
  defaultList: [] 
};

class TodoList {
  constructor(title, description, dueDate, priority, notes = "", checklist = "") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  };

  addToProjectManager(projectName) {
    if(!projectManager.hasOwnProperty(projectName)) {
      projectManager[projectName] = [];
    }
    projectManager[projectName].push(this);
    console.log(projectManager);
  };
};

function createTodoList(title, description, dueDate, priority, notes, checklist) {
  return new TodoList(title, description, dueDate, priority, notes, checklist);
}

// example todo list parameters
// title = 'clean room'
// description = 'pick up loose items around room'
// dueDate = 'tomorrow'
// priority = 'medium'
// notes = ''
// checklist = [{task:'organize desk', completed: false}, {task:'dust tv', completed: false}, {task: 'pick up socks', completed: false}]

// examples
let dailyTodo = new TodoList('1', '2', '3', '4', '5');
dailyTodo.addToProjectManager('defaultList');

export { createTodoList };