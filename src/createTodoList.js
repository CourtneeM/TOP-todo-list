let projectManager = {
  defaultList: [] 
};

class TodoList {
  constructor(title, description, dueDate, priority, notes = "", checklist = "", listName = "default") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.listName = listName;
  };
}

function addToProjectManager(todoList, projectName) {
  if(!projectManager.hasOwnProperty(projectName)) {
    projectManager[projectName] = [];
  }
  projectManager[projectName].push(todoList);
  console.log(projectManager);
}

function createTodoList(title, description, dueDate, priority, notes, checklist, listName) {
  return new TodoList(title, description, dueDate, priority, notes, checklist, listName);
}


// example todo list parameters
// title = 'clean room'
// description = 'pick up loose items around room'
// dueDate = 'tomorrow'
// priority = 'medium'
// notes = ''
// checklist = [{task:'organize desk', completed: false}, {task:'dust tv', completed: false}, {task: 'pick up socks', completed: false}]
// listName = 'daily task 1'

// examples
let dailyTodo = createTodoList('1', '2', '3', '4', '5');

let redTodo = new TodoList('clean room', 'pick up loose items around room', 'tomorrow', 'medium', '', [{task:'organize desk', completed: false}, {task:'dust tv', completed: false}, {task: 'pick up socks', completed: false}]);

addToProjectManager(dailyTodo, 'defaultList');
addToProjectManager(dailyTodo, 'defaultList');
addToProjectManager(redTodo, 'important');


// let redTodo = new TodoList('paint', 'paint house', 'today', 'high');
// console.log(redTodo.title);
// todoListManager.importantList = [];
// todoListManager.importantList.push(redTodo);
// console.log(todoListManager);

export { addToProjectManager };