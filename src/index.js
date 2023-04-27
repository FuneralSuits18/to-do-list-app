/* eslint-disable max-len */
import Todo from './todo';
import Project from './project';
import {
  projectsDOM, addTodoItemDOM, removeTodoItemDOM,
} from './dom';
import {login, uid, userRef, auth} from './auth';
import {addTodo, updateTodo, deleteTodo, getTodos} from './firestore';
import {onAuthStateChanged} from 'firebase/auth';

// const todo0 = new Todo('A new todo', 'desc', 6, 56);
// const todo1 = new Todo('2nd', 'desc', 9, 2);
// const todo2 = new Todo('3nd', 'a description', '20-03-23', 1);

// const project0 = new Project('Project 0');
// project0.addTodo(todo0);
// project0.addTodo(todo1);
// project0.addTodo(todo2);

// project0.todoList.forEach((element) => {
//   addTodoItemDOM(element);
// });

// document.querySelector('.demo').addEventListener('click', () => deleteTodo(todo2));
onAuthStateChanged(auth, (userRef) => {
  if (userRef) {
    console.log('logged in!!');
    getTodos('project40').then((todoList) => {
      console.log('aaaaaaaaaaaaaaaaaa', todoList);
      todoList.forEach((todo) => {
        addTodoItemDOM(todo);
      });
    });
  } else {
    console.log('Not logged in');
  }
});
