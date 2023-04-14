/* eslint-disable max-len */

// ============================== PROJECTS ==============================

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
 * NOT DONE ================================
 * Adds a project DOM
 * @param {Project} project
 */
function addProjectDOM(project) {
  const ul = document.querySelector('.project__ul');
  const li = document.createElement('li');
  li.textContent = project.name;
  ul.appendChild(li);
}

// ============================== ADD TODO ==============================

/**
 * Shows the hidden project list in add-note
 */
function showHiddenProject() {
  const hidden = document.querySelector('.hidden__project');
  hidden.classList.toggle('show__projects');
}
const showProjects = document.querySelector('.shown__project');
showProjects.addEventListener('click', showHiddenProject);

/**
 * Hide project list if clicked on anywhere but the list in add-note
 * @param {node} element
 */
function hideProjectsAddNote(element) {
  if (!element.target.matches('.shown__project')) {
    const hidden = document.querySelector('.hidden__project');
    hidden.classList.remove('show__projects');
  }
}
document.addEventListener('click', hideProjectsAddNote);

/**
 * Shows the hidden priorities
 */
function showHiddenPriority() {
  const hidden = document.querySelector('.hidden__priority');
  hidden.classList.toggle('show__priorities');
}
const showPriorities = document.querySelector('.shown__priority');
showPriorities.addEventListener('click', showHiddenPriority);

/**
 * Hide priority list if clicked on anywhere but the list
 * @param {node} element
 */
function hidePriorities(element) {
  if (!element.target.matches('.shown__priority')) {
    const hidden = document.querySelector('.hidden__priority');
    hidden.classList.remove('show__priorities');
  }
}
document.addEventListener('click', hidePriorities);

// ============================== TODO LIST ==============================

/**
 * Adds a todo DOM
 * @param {Todo} todo
 */
function addTodoItemDOM(todo) {
  const todoContainerDOM = document.querySelector('.todo__container');
  const todoWrapperDOM = document.createElement('div');
  const todoItemDOM = document.createElement('div');
  const todoItemTitleDOM = document.createElement('div');
  const todoItemDescriptionDOM = document.createElement('div');
  const todoItemDuedateDOM = document.createElement('div');
  const todoItemPriorityDOM = document.createElement('div');
  const todoOverlayDOM = document.createElement('div');

  todoItemDOM.classList.add('todo');
  todoWrapperDOM.classList.add('todo__wrapper__animation', 'todo__wrapper');
  todoItemTitleDOM.classList.add('todo__title');
  todoItemDescriptionDOM.classList.add('todo__description');
  todoItemDuedateDOM.classList.add('duedate');
  todoItemPriorityDOM.classList.add('priority');
  todoOverlayDOM.classList.add('todo__overlay');

  todoItemTitleDOM.textContent = todo.title;
  todoItemDescriptionDOM.textContent = todo.description;
  todoItemDuedateDOM.textContent = todo.duedate;
  todoItemPriorityDOM.textContent = todo.priority;

  todoItemDOM.appendChild(todoItemTitleDOM);
  todoItemDOM.appendChild(todoItemDescriptionDOM);
  todoItemDOM.appendChild(todoItemDuedateDOM);
  todoItemDOM.appendChild(todoItemPriorityDOM);
  todoWrapperDOM.appendChild(todoItemDOM);
  todoWrapperDOM.appendChild(todoOverlayDOM);
  todoContainerDOM.appendChild(todoWrapperDOM);
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
function loadTodo(element) {
  if (element.target.classList.contains('todo__overlay')) {
    element.target.classList.add('todo__overlay__loaded');

    // Remove animation class from todos
    const todoWrapper = document.querySelectorAll('.todo__wrapper');
    todoWrapper.forEach((div) => {
      div.classList.remove('todo__wrapper__animation');
    });

    // Get todo info text
    const todo = element.target.previousElementSibling;
    const todoTitle = todo.querySelector('.todo__title').textContent;
    const todoDescription = todo.querySelector('.todo__description').textContent;
    const todoDuedate = todo.querySelector('.duedate') ? todo.querySelector('.duedate').textContent : 0;
    const todoPriority = todo.querySelector('.priority') ? todo.querySelector('.priority').textContent : 0;

    // Create todo's divs
    const todoLoaded = document.createElement('div');
    const todoLoadedTitle = document.createElement('div');
    const todoLoadedDescription = document.createElement('div');
    const todoLoadedDuedate = document.createElement('div');
    const todoLoadedPriority = document.createElement('div');

    todoLoaded.classList.add('todo__load');
    todoLoadedTitle.classList.add('todo__title');
    todoLoadedDescription.classList.add('todo__description');
    todoLoadedDuedate.classList.add('duedate');
    todoLoadedPriority.classList.add('priority');

    // Load todo info to the new divs
    todoLoadedTitle.textContent = todoTitle;
    todoLoadedDescription.textContent = todoDescription;
    todoLoadedDuedate.textContent = todoDuedate;
    todoLoadedPriority.textContent = todoPriority;

    // Append todoLoaded to .todo__container
    todoLoaded.append(todoLoadedTitle, todoLoadedDescription, todoLoadedDuedate, todoLoadedPriority);
    todo.parentNode.parentNode.appendChild(todoLoaded);
  }
}
window.addEventListener('click', loadTodo);

/**
 * Unfocuses todo if clicked on anywhere on the screen but the focused todo
 * @param {node} element
 */
function unfocusTodo(element) {
  const todoLoaded = document.querySelector('.todo__load');
  if (todoLoaded == null);
  else {
    if (!element.target.matches('.todo__load') && !element.target.matches('.todo__title') && !element.target.matches('.todo__description') && !element.target.matches('.duedate') && !element.target.matches('.priority')) {
      const overlayLoaded = document.querySelector('.todo__overlay__loaded');
      overlayLoaded.classList.remove('todo__overlay__loaded');

      const todoWrapper = document.querySelectorAll('.todo__wrapper');
      todoWrapper.forEach((div) => {
        div.classList.add('todo__wrapper__animation');
      });

      todoLoaded.remove();
    }
  }
}
document.addEventListener('click', unfocusTodo);

/**
 * Loads elements to add a todo
 */
function loadAddTodo() {
  const addTodo = document.querySelector('.add__todo');
}
document.querySelector('.add__todo').addEventListener('click', loadAddTodo);

export {
  addProjectDOM, addTodoItemDOM, removeTodoItemDOM,
};
