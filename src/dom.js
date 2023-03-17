const projectsDOM = document.querySelector('.projects');

// show projects
function showProjects() {
  const projects = document.querySelector('.hidden');
  projects.classList.toggle('.show__projects');
}
const showProjectButton = document.querySelector('.shown');
showProjectButton.addEventListener('click', showProjects);

function addProjectDOM(project) {
  const projectItem = document.createElement('option');
  projectItem.value = project.name;
  projectItem.textContent = project.name;
}

const todoContainerDOM = document.querySelector('.todo__container');

function addTodoItemDOM(title, description, duedate = 0, priority = 0) {
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

  todoItemTitleDOM.textContent = title;
  todoItemDescriptionDOM.textContent = description;
  todoItemDuedateDOM.textContent = duedate;
  todoItemPriorityDOM.textContent = priority;

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
  projectsDOM, todoContainerDOM, addTodoItemDOM, removeTodoItemDOM,
};
