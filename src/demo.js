/* eslint-disable quotes */
/* eslint-disable max-len */
import {app} from './firebase';
import {getFirestore, collection, doc, setDoc, updateDoc, serverTimestamp} from 'firebase/firestore';

const db = getFirestore(app);

// Add a new todo with a generated id. Call this later using todoRef.id
// const todoRef = await addDoc(collection(db, 'demo'), {
//   title: Todo1,
//   description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptatum nihil nobis unde quibusdam eveniet.',
//   priority: 1,
//   duedate: '30 April, 2023',
// }, {
//   merge: true,
// });
// // Update the timestamp field with the value from the server
// await updateDoc(todoRef, {
//   timestamp: serverTimestamp(),
// });


/**
 * eh
 */
async function demo() {
  try {
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  } catch (error) {
    console.error('not feelin good man. ', error);
  }
}


const todoRef = 0;
export {todoRef, demo};
