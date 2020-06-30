class TodoList {

  constructor(title, description, dueDate, priority, notes = "", checklist = "", listName = "default") {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._notes = notes;
    this._checklist = checklist;
    this._listName = listName;
  };
  
  viewTodoList() {
    this._listName = {
      title: this._title,
      description: this._description,
      dueDate: this.dueDate,
      priority: this._priority,
      notes: this._notes,
      checklist: this._checklist
    }
    return this._listName;
  }

} 


// example todo list parameters
// title = 'clean room'
// description = 'pick up loose items around room'
// dueDate = 'tomorrow'
// priority = 'medium'
// notes = ''
// checklist = [{task:'organize desk', completed: false}, {task:'dust tv', completed: false}, {task: 'pick up socks', completed: false}]
// listName = 'daily task 1'


let dailyTodo = new TodoList('clean room', 'pick up loose items around room', 'tomorrow', 'medium', '', [{task:'organize desk', completed: false}, {task:'dust tv', completed: false}, {task: 'pick up socks', completed: false}]).viewTodoList();
console.log(dailyTodo);
