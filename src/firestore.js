/* eslint-disable max-len */
import {app} from './firebase';
import {getFirestore, collection, doc, setDoc, updateDoc, serverTimestamp} from 'firebase/firestore';

const db = getFirestore(app);

const alovelaceDocumentRef = doc(db, 'users', 'alovelace');
const usersCollectionRef = collection(db, 'users');

// Set a project
await setDoc(doc(db, 'projects', 'pr0ject0'), {
  // this project0 is a document
  // refer to notes
}, {
  merge: true,
});

// Set priorities
await setDoc(doc(db, 'priorities', 1), {
  // refer to notes
});

// Add a new todo with a generated id. Call this later using todoRef.id
const todoRef = await addDoc(collection(db, 'project0'), {
  Title: Todo1,
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptatum nihil nobis unde quibusdam eveniet.',
  priority: 1,
}, {
  merge: true,
});
// Update the timestamp field with the value from the server
await updateDoc(todoRef, {
  timestamp: serverTimestamp(),
});


