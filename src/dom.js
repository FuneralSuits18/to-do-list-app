/* eslint-disable max-len */

/** Shows or hides projects when clicked on .projects.shown  */
function toggleProjects() {
  const projects = document.querySelector('.hidden');
  projects.classList.toggle('show__projects');
}
const showProjectButton = document.querySelector('.shown');
showProjectButton.addEventListener('click', toggleProjects);

/**
 * Hides project list if clicked on anywhere on the screen but .projects.shown
 * @param {node} element
 */
function hideProjects(element) {
  if (!element.target.matches('.shown')) {
    const hidden = document.querySelector('.hidden');
    hidden.classList.remove('show__projects');
  }
}
window.onclick = hideProjects;

/**
 * Adds a project DOM
 * @param {Project} project
 */
function addProjectDOM(project) {
  const ul = document.querySelector('.project__ul');
  const li = document.createElement('li');
  li.textContent = project.name;
  ul.appendChild(li);
}

/**
 * Adds a todo DOM
 * @param {Todo} todo
 */
function addTodoItemDOM(todo) {
  const todoContainerDOM = document.querySelector('.todo__container');
  const todoItemDOM = document.createElement('div');
  const todoItemTitleDOM = document.createElement('div');
  const todoItemDescriptionDOM = document.createElement('div');
  const todoItemDuedateDOM = document.createElement('div');
  const todoItemPriorityDOM = document.createElement('div');

  todoItemDOM.classList.add('todo');
  todoItemTitleDOM.classList.add('todo__title');
  todoItemDescriptionDOM.classList.add('todo__description');
  todoItemDuedateDOM.classList.add('duedate');
  todoItemPriorityDOM.classList.add('priority');

  todoItemTitleDOM.textContent = todo.title;
  todoItemDescriptionDOM.textContent = todo.description;
  todoItemDuedateDOM.textContent = todo.duedate;
  todoItemPriorityDOM.textContent = todo.priority;

  todoItemDOM.appendChild(todoItemTitleDOM);
  todoItemDOM.appendChild(todoItemDescriptionDOM);
  todoItemDOM.appendChild(todoItemDuedateDOM);
  todoItemDOM.appendChild(todoItemPriorityDOM);
  todoContainerDOM.appendChild(todoItemDOM);
}

/**
 * Removes a todo DOM
 * @param {todo} todo
 */
function removeTodoItemDOM(todo) {
  const todoItemList = todoContainerDOM.childNodes;
  todoItemList.forEach((todoItem) => {
    if (todo.title === todoItem.querySelector('.todo__title').textContent && todo.description === todoItem.querySelector('.todo__description').textContent) {
      todoItem.remove();
    }
  });
}

/**
 * Loads a todo to focus
 * @param {node} element
 */
function loadElement(element) {
  if (element.target.classList.contains('todo__overlay')) {
    element.target.classList.remove('todo__overlay');
    element.target.parentNode.classList.toggle('todo__load');
    element.target.parentNode.classList.add('todo__load__flag');
  }
}
window.onclick = loadElement;

/**
 * Unfocuses todo if clicked on anywhere on the screen but the focused todo
 * @param {node} element
 */
function unfocusTodo(element) {
  const todoLoaded = document.querySelector('.todo__load__flag');
  if (todoLoaded == null);
  else {
    if (!element.target.matches('.todo__wrapper') && !element.target.matches('.todo') && !element.target.matches('.todo__title') && !element.target.matches('.todo__description') && !element.target.matches('.duedate') && !element.target.matches('.todo__priority')) {
      const overlayPlaceholder = todoLoaded.querySelector('.overlay__placeholder');
      overlayPlaceholder.classList.add('todo__overlay');
      todoLoaded.classList.toggle('todo__load');
      todoLoaded.classList.remove('todo__load__flag');
    }
  }
}

document.addEventListener('click', unfocusTodo);

export {
  addProjectDOM, addTodoItemDOM, removeTodoItemDOM,
};
