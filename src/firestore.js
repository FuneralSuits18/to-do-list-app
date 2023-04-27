/* eslint-disable max-len */
import {app} from './firebase';
import {getFirestore, collection, doc, addDoc, setDoc, deleteDoc, getDocs, query, orderBy, serverTimestamp} from 'firebase/firestore';
import {uid} from './auth';

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
    await addDoc(collection(db, 'users', uid, 'project40'), {
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      duedate: todo.duedate,
      timestamp: serverTimestamp(),
    });
    console.log('Todo added to database');
  } catch (error) {
    console.error('Todo NOT added to database', error);
  }
}

/**
 *
 * @param {Todo} todo
 * @param {string} todoId
 */
async function updateTodo(todo) { // add todoId param later
  try {
    await setDoc(doc(db, 'users', uid, 'project40', '9icWnJGVDyLKC0HHmKSB'), {
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      duedate: todo.duedate,
      timestamp: serverTimestamp(),
    });
    console.log('Todo updated');
  } catch (error) {
    console.error('Todo NOT updated', error);
  }
}

/**
 *
 * @param {todo} todo
 * @param {string} todoId
 */
async function deleteTodo(todo) { // add todoId param later
  try {
    await deleteDoc(doc(db, 'users', uid, 'project40', '9icWnJGVDyLKC0HHmKSB'));
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
  const q = query(collection(db, 'users', uid, project), orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((todo) => {
    todoList.push(todo.data());
  });
  return todoList;
}

export {addTodo, updateTodo, deleteTodo, getTodos};
