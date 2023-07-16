/* eslint-disable max-len */
import {getTodos} from './firestore';

// ============================== ADD TODO ==============================

// /**
//  * Shows the hidden project list in add-note
//  */
// function showHiddenProject() {
//   const hidden = document.querySelector('.hidden__project');
//   hidden.classList.toggle('show__projects');
// }
// const showProjects = document.querySelector('.shown__project');
// showProjects.addEventListener('click', showHiddenProject);

// /**
//  * Hide project list if clicked on anywhere but the list in add-note
//  * @param {node} element
//  */
// function hideProjectsAddNote(element) {
//   if (!element.target.matches('.shown__project')) {
//     const hidden = document.querySelector('.hidden__project');
//     hidden.classList.remove('show__projects');
//   }
// }
// document.addEventListener('click', hideProjectsAddNote);

// /**
//  * Shows the hidden priorities
//  */
// function showHiddenPriority() {
//   const hidden = document.querySelector('.hidden__priority');
//   hidden.classList.toggle('show__priorities');
// }
// const showPriorities = document.querySelector('.shown__priority');
// showPriorities.addEventListener('click', showHiddenPriority);

// /**
//  * Hide priority list if clicked on anywhere but the list
//  * @param {node} element
//  */
// function hidePriorities(element) {
//   if (!element.target.matches('.shown__priority')) {
//     const hidden = document.querySelector('.hidden__priority');
//     hidden.classList.remove('show__priorities');
//   }
// }
// document.addEventListener('click', hidePriorities);

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
 * Shows selected project and hides the previously shown project
 * @param {node} element
 */
function selectProject(element) {
  const selectedProject = element.target;
  const shownProject = selectedProject.parentNode.parentNode.previousElementSibling;

  // Interchange text contents
  let placeHolder = shownProject.textContent;
  shownProject.textContent = selectedProject.textContent;
  selectedProject.textContent = placeHolder;

  // Interchange class names
  placeHolder = shownProject.classList[1];
  shownProject.className = 'shown';
  shownProject.classList.add(selectedProject.className);
  selectedProject.className = placeHolder;
}

/**
 * Load selectProject function after loadProjects function loads
 */
async function loadSelectProjects() {
  await loadProjects();
  const projectUl = document.querySelector('.project__ul');
  for (const li of projectUl.children) {
    li.addEventListener('click', selectProject);
  }
}


/**
 * Get all the project names
 */
async function loadProjects() {
  unloadProjects();
  const ul = document.querySelector('.project__ul');

  const projects = [];
  await getTodos('all').then((todoList) => {
    todoList.forEach((todo) => {
      if (projects.includes(todo.data.project)) ;
      else {
        projects.push(todo.data.project);
        const newLi = document.createElement('li');
        newLi.textContent = todo.data.project;
        newLi.classList.add(todo.data.project.split(' ').join('_'));
        ul.appendChild(newLi);
      }
    });
  });
}

/**
 * Remove all the project names from list
 */
function unloadProjects() {
  const projectUl = document.querySelector('.project__ul');
  for (const li of projectUl.children) {
    li.remove();
  }
}

// ============================== TODO LIST ==============================

/**
 * Adds a todo DOM (implemented in 'firestore.js')
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
  const todoItemProjectDOM = document.createElement('div');
  const todoOverlayDOM = document.createElement('div');

  todoItemDOM.classList.add('todo');
  todoWrapperDOM.classList.add('todo__wrapper__animation', 'todo__wrapper');
  todoItemTitleDOM.classList.add('todo__title');
  todoItemDescriptionDOM.classList.add('todo__description');
  todoItemDuedateDOM.classList.add('duedate');
  todoItemPriorityDOM.classList.add('priority');
  todoItemProjectDOM.classList.add('project');
  todoOverlayDOM.classList.add('todo__overlay');

  todoItemProjectDOM.hidden = true;

  todoItemTitleDOM.textContent = todo.title;
  todoItemDescriptionDOM.textContent = todo.description;
  if (!todo.duedate) ;
  else {
    todoItemDuedateDOM.textContent ='Duedate: ' + todo.duedate;
  }

  if (todo.priority === null) ;
  else {
    todoItemPriorityDOM.textContent = 'Priority: ' + todo.priority;
  }

  todoItemProjectDOM.textContent = 'Project: ' + todo.project;

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
 * Remove all todo items from html page
 */
function removeAllTodoItemsDOM() {
  const todos = document.querySelectorAll('.todo__wrapper');
  todos.forEach((todo) => {
    todo.remove();
  });
}

/**
 * Loads a todo to focus
 * @param {node} element
 */
function loadTodo(element) {
  if (element.target.classList.contains('todo__overlay')) {
    element.target.classList.add('todo__overlay__loaded');

    // Remove animation class('.todo__wrapper') from todos
    const todoWrapper = document.querySelectorAll('.todo__wrapper');
    todoWrapper.forEach((div) => {
      div.classList.remove('todo__wrapper__animation');
    });

    const editFormContainer = document.createElement('div');
    editFormContainer.classList.add('edit__form');
    editFormContainer.innerHTML = `<form enctype="multipart/form-data" class="add__todo" method="post" name="add-todo__formdata">
    <input name="title" class="title" type="text" placeholder="Title">

    <textarea name="description" class="description" cols="30" rows="1" style="overflow:hidden" placeholder="Write a note..."></textarea>

    <div class="add__duedate__container">
      <label for="add__duedate">Duedate:</label>
      <input type="date" name="duedate" class="add__duedate">
    </div>

    <div class="select__container select__project">
      <div class="select">
        <select name="project" id="project">
           <option selected disabled>Project</option>
           <option value="none">None</option>
           <option value="Project 1">Project 1</option>
           <option value="Project 2">Project 2</option>
           <option value="Project 3">Project 3</option>
           <option value="fb2">+ New</option>
        </select>
      </div>
    </div>
    
    <div class="select__container">
      <div class="select">
        <select name="priority" id="priority">
          <option selected disabled>Priority</option>
          <option value="none">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="add">+ Add</option>
        </select>
      </div>
    </div>

    <button type="submit" class="btn">Edit&#160<i class="fa-solid fa-check"></i></button>
    </form>`;

    // an underlay for the 'edit todo' to make everything else in the page unclickable
    const underlay = document.createElement('div');
    underlay.classList.add('underlay');


    const todo = element.target.previousElementSibling;
    // Add editFormContainer to .todo__container
    todo.parentNode.parentNode.prepend(editFormContainer);
    // Add underlay to .container
    todo.parentNode.parentNode.parentNode.append(underlay);

    // // Get todo info text
    // const todo = element.target.previousElementSibling;
    // const todoTitle = todo.querySelector('.todo__title').textContent;
    // const todoDescription = todo.querySelector('.todo__description').textContent;
    // const todoDuedate = todo.querySelector('.duedate') ? todo.querySelector('.duedate').textContent : 0;
    // const todoPriority = todo.querySelector('.priority') ? todo.querySelector('.priority').textContent : 0;
    // const todoProject = todo.querySelector('.project').textContent; // this is not loaded into DOM. Used for editing todos.
    // ====================================================
    //   // Create todo's divs
    //   const todoLoaded = document.createElement('div');
    //   const todoLoadedTitle = document.createElement('div');
    //   const todoLoadedDescription = document.createElement('div');
    //   const todoLoadedDuedate = document.createElement('div');
    //   const todoLoadedPriority = document.createElement('div');

    //   todoLoaded.classList.add('todo__load');
    //   todoLoadedTitle.classList.add('todo__title');
    //   todoLoadedDescription.classList.add('todo__description');
    //   todoLoadedDuedate.classList.add('duedate');
    //   todoLoadedPriority.classList.add('priority');

    //   // Load todo info to the new divs
    //   todoLoadedTitle.textContent = todoTitle;
    //   todoLoadedDescription.textContent = todoDescription;
    //   todoLoadedDuedate.textContent = todoDuedate;
    //   todoLoadedPriority.textContent = todoPriority;

    //   // Edit button
    //   const editButton = document.createElement('div');
    //   editButton.classList.add('edit');
    //   editButton.textContent = 'Edit';
    //   editButton.addEventListener('click', fillAddTodoForm);

    //   // Append todoLoaded to .todo__container
    //   todoLoaded.append(todoLoadedTitle, todoLoadedDescription, todoLoadedDuedate, todoLoadedPriority, editButton);
    //   todo.parentNode.parentNode.appendChild(todoLoaded);

  //   /**
  //  * Add todo's data to form
  //  */
  //   function fillAddTodoForm() {
  //     document.querySelector('.title').value = todoTitle;
  //     document.querySelector('.description').value = todoDescription;
  //     document.querySelector('.add__duedate').value = todoDuedate.split(' ')[1];
  //     document.querySelector(`#priority option[${todoPriority.split(' ')[1]}]`).selected = true;
  //     document.querySelector(`#project option[${todoProject.split(' ')[1]}]`).selected = true;
  //   }
    // ==================================================================
  }
}
window.addEventListener('click', loadTodo);


/**
 * Unfocuses todo if clicked on anywhere on the screen but the focused todo
 * @param {node} element
 */
function unfocusTodo(element) {
  const todoLoaded = document.querySelector('.edit__form');
  if (todoLoaded == null);
  else {
    // if (!element.target.matches('.edit__form') && !element.target.matches('.todo__title') && !element.target.matches('.todo__description') && !element.target.matches('.duedate') && !element.target.matches('.priority')) {
    if (element.target.matches('.underlay')) {
      const overlayLoaded = document.querySelector('.todo__overlay__loaded');
      overlayLoaded.classList.remove('todo__overlay__loaded');

      const todoWrapper = document.querySelectorAll('.todo__wrapper');
      todoWrapper.forEach((div) => {
        div.classList.add('todo__wrapper__animation');
      });

      todoLoaded.remove();

      element.target.remove();
    }
  }
}
document.addEventListener('click', unfocusTodo);

/**
 * Loads elements to add a todo
 */
function loadAddTodo() {
  // const addTodo = document.querySelector('.add__todo');
}
document.querySelector('.add__todo').addEventListener('click', loadAddTodo);

export {
  addTodoItemDOM, removeTodoItemDOM, loadSelectProjects, removeAllTodoItemsDOM, unloadProjects,
};
