/* eslint-disable max-len */
import Todo from './todo';
import {addTodo} from './firestore';

// /**
//  *
//  * @param {form} element
//  */
// function formHandler(element) {
//   const title = element.title;
//   const description = element.description;
//   const priority = element.querySelector('.shown__priority').textContent;
// }


// const form = document.querySelectorAll('form');
// form.addEventListener('change', formHandler);

// const form = document.querySelector('.add__todo');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const title = document.getElementById('title');
//   const description = document.getElementById('description');
//   const duedate = document.getElementById('add__duedate');
//   const project = document.getElementById('shown__project');
//   const priority = document.getElementById('shown__priority');
//   console.log(title.value, description.value, duedate.value, project.value, priority.value);

//   if (project.value === 'Project') project.value = null;
//   if (priority.value === 'Priority') priority.value = null;

//   const todo = new Todo(title.value, description.value, duedate.value, priority.value, project.value);

//   addTodo(todo);
// });

document.forms.namedItem('add-todo__formdata').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const todo = new Todo(formData.get('title'), formData.get('description'), formData.get('duedate'), formData.get('priority'), formData.get('project'));
  if (todo.project == null) todo.project = 'none';
  addTodo(todo);
});
