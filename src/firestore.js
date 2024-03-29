/* eslint-disable max-len */

import {app} from './firebase';
import {getFirestore, collection, doc, addDoc, setDoc, deleteDoc, getDocs, query, orderBy, serverTimestamp, where} from 'firebase/firestore';
import {uid} from './auth';
import {addTodoItemDOM} from './dom';

const db = getFirestore(app);

// Example of references
// const alovelaceDocumentRef = doc(db, 'users', 'alovelace');
// const usersCollectionRef = collection(db, 'users');

// if project/ priority is deleted, move notes to default and delete collection

/**
 *
 * @param {Todo} todo
 */
async function addTodo(todo) {
  // Add a new todo with a generated id. Call this later using todoRef.id
  try {
    await addDoc(collection(db, 'users', uid, 'projects'), {
      title: todo.title,
      description: todo.description,
      duedate: todo.duedate,
      priority: todo.priority,
      project: todo.project,
      timestamp: serverTimestamp(),
    });
    console.log('Todo added to database');
    addTodoItemDOM(todo);
  } catch (error) {
    console.error('Todo NOT added to database', error);
  }
}

/**
 *
 * @param {Todo} todo
 * @param {string} todoId
 */
async function updateTodo(todo, todoId) {
  try {
    await setDoc(doc(db, 'users', uid, 'projects', todoId), {
      title: todo.title,
      description: todo.description,
      duedate: todo.duedate,
      priority: todo.priority,
      project: todo.project,
      timestamp: serverTimestamp(),
    });
    console.log('Todo updated');
  } catch (error) {
    console.error('Todo NOT updated', error);
  }
}

/**
 *
 * @param {string} todoId
 */
async function deleteTodo(todoId) { // add todoId param later
  try {
    await deleteDoc(doc(db, 'users', uid, 'projects', todoId));
    console.log('Todo deleted');
  } catch (error) {
    console.error('Todo NOT deleted', error);
  }
}

/**
 *
 * @param {string} project
 */
async function getTodos(project) {
  const todoList = [];
  let q;
  let querySnapshot;
  if (project === 'all') {
    q = query(collection(db, 'users', uid, 'projects'), orderBy('priority', 'desc'), orderBy('timestamp', 'desc'));
    querySnapshot = await getDocs(q);
  } else {
    q = query(collection(db, 'users', uid, 'projects'), where('project', '==', project), orderBy('priority', 'desc'), orderBy('timestamp', 'desc'));
    querySnapshot = await getDocs(q);
  }
  querySnapshot.forEach((todo) => {
    todoList.push({id: todo.id, data: todo.data()});
  });
  return todoList;
}

export {addTodo, updateTodo, deleteTodo, getTodos};
