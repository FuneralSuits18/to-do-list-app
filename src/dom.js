/** Function to show projects when clicked on .projects.shown  */
function showProjects() {
  const projects = document.querySelector('.hidden');
  projects.classList.toggle('.show__projects');
}
const showProjectButton = document.querySelector('.shown');
showProjectButton.addEventListener('click', showProjects);

/**
 * Adds a project DOM
 * @param {project} project
 */
function addProjectDOM(project) {
  const ul = document.querySelector('.project__ul');
  const li = document.createElement('li');
  li.textContent = project.name;
  ul.appendChild(li);
}

/**
 * Adds a todo DOM
 * @param {todo} todo
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

function removeTodoItemDOM(todo) {
  const todoItemList = todoContainerDOM.childNodes;
  todoItemList.forEach((todoItem) => {
    if (todo.title === todoItem.querySelector('.todo__title').textContent && todo.description === todoItem.querySelector('.todo__description').textContent) {
      todoItem.remove();
    }
  });
}

const todo = document.querySelector('.todo');
todo.addEventListener('click', loadElement);

function loadElement() {
  todo.style.position = 'absolute';
  todo.style.width;
}

export {
  addProjectDOM, addTodoItemDOM, removeTodoItemDOM,
};
