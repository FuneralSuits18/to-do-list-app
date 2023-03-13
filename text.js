/* eslint-disable */ 

const projectsDOM = document.querySelector('.projects');
const todoContainerDOM = document.querySelector('.todo__container');

function addTodoItem(title, description, dueDate = 0, priority = 0) {
  const todoItemDOM = document.createElement('div');
  todoItemDOM.classList.add('todo');
  const todoItemTitleDOM = document.createElement('div');
  todoItemTitleDOM.classList.add('todo__title');
  todoItemTitleDOM.textContent = title;
  const todoItemDescriptionDOM = document.createElement('div');
  todoItemDescriptionDOM.classList.add('todo__description');
  todoItemDescriptionDOM.textContent = description;
  const todoItemDuedateDOM = document.createElement('div');
  todoItemDuedateDOM.classList.add('duedate');
  todoItemDuedateDOM.textContent = dueDate;
  const todoItemPriorityDOM = document.createElement('div');
  todoItemPriorityDOM.classList.add('priority');
  todoItemPriorityDOM.textContent = priority;
  todoItemDOM.appendChild(todoItemTitleDOM);
  todoItemDOM.appendChild(todoItemDescriptionDOM);
  todoItemDOM.appendChild(todoItemDuedateDOM);
  todoItemDOM.appendChild(todoItemPriorityDOM);
  todoContainerDOM.appendChild(todoItemDOM);
}

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(name) {
    this.name = name;
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

const todo0 = new Todo('A new todo', 'desc', '20-03-23', 2);
const project0 = new Project('Project 0');

project0.addTodo(todo0);
project0.todoList.forEach((element) => {
  if (!element.duedate && !element.priority) {
    addTodoItem(element.title, element.description);
  } else if (!element.priority) {
    addTodoItem(element.title, element.description, element.duedate);
  } else if (!element.duedate) {
    addTodoItem(element.title, element.description, 0, element.priority);
  } else {
    addTodoItem(element.title, element.description, element.duedate, element.priority);
  }
});
