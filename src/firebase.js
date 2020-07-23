/*
const firebaseConfig = {
  apiKey: "AIzaSyBqJ8AEgS4B0niLrq7BMxI5jL2VbP-SzX4",
  authDomain: "todo-app-28b65.firebaseapp.com",
  databaseURL: "https://todo-app-28b65.firebaseio.com",
  projectId: "todo-app-28b65",
  storageBucket: "todo-app-28b65.appspot.com",
  messagingSenderId: "904925951115",
  appId: "1:904925951115:web:cb125fca05d2ddd3b1908e",
  measurementId: "G-L9GT1NECWK"
};*/

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDe1ETYnTcys2oAD7GOpmSGfZubHOwRbMA",
  authDomain: "app-tareas-164bb.firebaseapp.com",
  databaseURL: "https://app-tareas-164bb.firebaseio.com",
  projectId: "app-tareas-164bb",
  storageBucket: "app-tareas-164bb.appspot.com",
  messagingSenderId: "144946196895",
  appId: "1:144946196895:web:79ce3cabf4e3bbd97f0daa",
  measurementId: "G-6G3L9R7ERL"
  });

const db = firebaseApp.firestore();

export default db;
