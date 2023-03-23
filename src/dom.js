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
document.addEventListener('click', hideProjects);

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
    element.target.classList.add('todo__overlay__loaded');

    // Remove animation class from todos
    const todoWrapperAnimation = document.querySelectorAll('.todo__wrapper__animation');
    todoWrapperAnimation.forEach((div) => {
      div.classList.remove('todo__wrapper__animation');
    });

    // =========================================================================
    // CHANGE TO TEXTCONTENT AND DIV/STYLE TODOLOADED DIV LATER
    // =========================================================================
    // Get todo info and load it into todoLoaded
    const todo = element.target.previousElementSibling;
    const todoTitle = todo.querySelector('.todo__title').textContent;
    const todoDescription = todo.querySelector('.todo__description').textContent;
    const todoDuedate = todo.querySelector('.duedate') ? todo.querySelector('.duedate').textContent : 0;
    const todoPriority = todo.querySelector('.priority') ? todo.querySelector('.priority').textContent : 0;

    // Load todo info into a div
    const todoLoaded = document.createElement('div');
    const todoLoadedTitle = document.createElement('div');
    const todoLoadedDescription = document.createElement('div');
    const todoLoadedDuedate = document.createElement('div');
    const todoLoadedPriority = document.createElement('div');

    todoLoadedTitle.classList.add('todo__title');
    todoLoadedDescription.classList.add('todo__description');
    todoLoadedDuedate.classList.add('duedate');
    todoLoadedPriority.classList.add('priority');

    todoLoadedTitle.textContent = todoTitle;
    todoLoadedDescription.textContent = todoDescription;
    todoLoadedDuedate.textContent = todoDuedate;
    todoLoadedPriority.textContent = todoPriority;

    todoLoaded.classList.add('todo__load');
    todoLoaded.append(todoLoadedTitle, todoLoadedDescription, todoLoadedDuedate, todoLoadedPriority);
    console.log(todoLoaded);
    todo.parentNode.parentNode.appendChild(todoLoaded);
  }
}
window.addEventListener('click', loadElement);

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
