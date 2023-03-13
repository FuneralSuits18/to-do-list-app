import Todo from './todo';
import Project from './project';
import { projectsDOM, todoContainerDOM, addTodoItemDOM } from './dom';

const todo0 = new Todo('A new todo', 'desc', 6, 56);
const project0 = new Project('Project 0');
const todo1 = new Todo('2nd', 'desc', 9, 2);

project0.addTodo(todo0);
project0.addTodo(todo1);

project0.todoList.forEach((element) => {
  addTodoItemDOM(element.title, element.description, element.duedate, element.priority);
});
