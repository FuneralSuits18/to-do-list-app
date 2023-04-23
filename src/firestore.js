/* eslint-disable max-len */
import {app} from './firebase';
import {getFirestore, collection, doc, addDoc, setDoc, serverTimestamp} from 'firebase/firestore';

const db = getFirestore(app);

// Example of references
// const alovelaceDocumentRef = doc(db, 'users', 'alovelace');
// const usersCollectionRef = collection(db, 'users');


// if project/ priority is deleted, move notes to default and delete collection
// Set a project
await setDoc(doc(db, 'projects', 'pr0ject1'), {
  // this project0 is a document
  // refer to notes
}, {
  merge: true,
});

// Set priorities
await setDoc(doc(db, 'priorities', '1'), {
  // refer to notes
});

/**
 *
 * @param {todo} todo
 */
async function addTodo(todo) {
  // Add a new todo with a generated id. Call this later using todoRef.id
  await addDoc(collection(db, 'project1'), {
    title: todo.title,
    description: todo.description,
    priority: todo.priority,
    duedate: todo.duedate,
    timestamp: serverTimestamp(),
  });
}

/**
 *
 * @param {todo} todo
 * @param {string} todoId
 */
async function updateTodo(todo, todoId) {
  // Add a new todo with a generated id. Call this later using todoRef.id
  await setDoc(collection(db, 'project1', todoId), {
    title: todo.title,
    description: todo.description,
    priority: todo.priority,
    duedate: todo.duedate,
    timestamp: serverTimestamp(),
  });
}


export {addTodo, updateTodo};
