class Project {
  constructor() {
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  remove(todo) {
    const index = this.todoList.indexOf(todo);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  }
}

export default Project;
