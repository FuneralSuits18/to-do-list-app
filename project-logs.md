# Works

## firestore

- todos can be sorted by priority (then, timestamp) or duedate (then, timestamp)
- path = users/duser/projects/dnotes

## index.js
- Check for conditions to add todo without duedate/priority. Pass to addTodoItemDOM

## html css
- animation for loading/unloading todo
- in dom.js, load todos from window, instead of the todo-container

<br>

# Ideas

## Projects
- bar button shows manage projects
- project name is clickable and shows other projects in a dropdown menu
- one project name is 'random'. If a project is deleted, the items on that project is dumped into 'random'.
- shift a todo to different project?
  
## Todo list
- if there's no text in a todo, it is removed from the list.

## dom.js

- in "Projects", first node is "All", and last node is "None". Exclude "none" when making li nodes in loadProjects function. Add those projects last after creating "None" node.