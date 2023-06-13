/* eslint-disable max-len */

import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDV2baezy09YizI-IP43HWLM9RM-2qJxzs',
  authDomain: 'todo-app-dc17a.firebaseapp.com',
  projectId: 'todo-app-dc17a',
  storageBucket: 'todo-app-dc17a.appspot.com',
  messagingSenderId: '981831796551',
  appId: '1:981831796551:web:8c7a1ec7ba92c992022e62',
};

const app = initializeApp(firebaseConfig);

export {app};
