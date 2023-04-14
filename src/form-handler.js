import Todo from './todo';

/**
 *
 * @param {form} element
 */
function formHandler(element) {
  const title = element.title;
  const description = element.description;
  const priority = element.querySelector('.shown__priority').textContent;
}


const form = document.querySelectorAll('form');
form.addEventListener('change', formHandler);
