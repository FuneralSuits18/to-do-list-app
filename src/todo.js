/** -_- */
class Todo {
  /**
   * @param {string} title
   * @param {string} description
   * @param {string} duedate
   * @param {integer} priority
   * @param {string} project
   */
  constructor(title, description, duedate, priority, project) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.project = project;
  }
}

export default Todo;
