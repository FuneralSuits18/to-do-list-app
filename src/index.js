/* eslint-disable max-len */
import Todo from './todo';
import Project from './project';
import {
  projectsDOM, addTodoItemDOM, removeTodoItemDOM, loadSelectProjects,
} from './dom';
import {login, uid, userRef, auth} from './auth';
import {addTodo, updateTodo, deleteTodo, getTodos} from './firestore';
import {onAuthStateChanged} from 'firebase/auth';

onAuthStateChanged(auth, (userRef) => {
  if (userRef) {
    console.log('logged in!!');
    getTodos('all').then((todoList) => {
      todoList.forEach((todo) => {
        addTodoItemDOM(todo.data);
      });
    });
    loadSelectProjects();
  } else {
    console.log('Not logged in');
  }
});
