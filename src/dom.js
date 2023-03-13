const projectsDOM = document.querySelector('.projects');

function addProjectDOM(name) {

}

const todoContainerDOM = document.querySelector('.todo__container');

function addTodoItemDOM(title, description, duedate = 0, priority = 0) {
  const todoItemDOM = document.createElement('div');
  todoItemDOM.classList.add('todo');
  const todoItemTitleDOM = document.createElement('div');
  todoItemTitleDOM.classList.add('todo__title');
  todoItemTitleDOM.textContent = title;
  const todoItemDescriptionDOM = document.createElement('div');
  todoItemDescriptionDOM.classList.add('todo__description');
  todoItemDescriptionDOM.textContent = description;
  const todoItemDuedateDOM = document.createElement('div');
  todoItemDuedateDOM.classList.add('duedate');
  todoItemDuedateDOM.textContent = duedate;
  const todoItemPriorityDOM = document.createElement('div');
  todoItemPriorityDOM.classList.add('priority');
  todoItemPriorityDOM.textContent = priority;
  todoItemDOM.appendChild(todoItemTitleDOM);
  todoItemDOM.appendChild(todoItemDescriptionDOM);
  todoItemDOM.appendChild(todoItemDuedateDOM);
  todoItemDOM.appendChild(todoItemPriorityDOM);
  todoContainerDOM.appendChild(todoItemDOM);
}

export { projectsDOM, todoContainerDOM, addTodoItemDOM };
