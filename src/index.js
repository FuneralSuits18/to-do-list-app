import Todo from './todo';
import Project from './project';
import {
  projectsDOM, addTodoItemDOM, removeTodoItemDOM,
} from './dom';
import {login} from './handleuser';

const todo0 = new Todo('A new todo', 'desc', 6, 56);
const todo1 = new Todo('2nd', 'desc', 9, 2);
const todo2 = new Todo('3nd', 'a description', '20-03-23', 1);

const project0 = new Project('Project 0');
project0.addTodo(todo0);
project0.addTodo(todo1);
project0.addTodo(todo2);

project0.todoList.forEach((element) => {
  addTodoItemDOM(element);
});
