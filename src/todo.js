/** -_- */
class Todo {
  /**
   * @param {text} title
   * @param {text} description
   * @param {date} duedate
   * @param {integer} priority
   */
  constructor(title, description, duedate, priority) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
  }
}

export default Todo;
