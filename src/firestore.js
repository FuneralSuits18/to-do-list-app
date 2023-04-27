/* eslint-disable max-len */
import {app} from './firebase';
import {getFirestore, collection, doc, addDoc, setDoc, serverTimestamp} from 'firebase/firestore';
import {uid} from './auth';

const db = getFirestore(app);

// Example of references
// const alovelaceDocumentRef = doc(db, 'users', 'alovelace');
// const usersCollectionRef = collection(db, 'users');


// if project/ priority is deleted, move notes to default and delete collection

/**
 *
 * @param {todo} todo
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
9icWnJGVDyLKC0HHmKSB
 * @param {todo} todo
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

export {addTodo, updateTodo};
