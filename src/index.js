import Todo from './todo';
import Project from './project';
import { projectsDOM, todoContainerDOM, todoItemDOM } from './dom';

const todo0 = new Todo('A new todo', 'desc', '20-03-23', 2);
const project0 = new Project();

project0.addTodo(todo0);

for (const todo of project0) {
  todoItemDOM.textContent = 
}
