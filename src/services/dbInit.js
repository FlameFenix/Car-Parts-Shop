// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-yLLzPgYRRObTfdqo_sa0epCauIlzZnI",
  authDomain: "dimitrovautoservice.firebaseapp.com",
  databaseURL: "https://dimitrovautoservice-default-rtdb.firebaseio.com",
  projectId: "dimitrovautoservice",
  storageBucket: "dimitrovautoservice.appspot.com",
  messagingSenderId: "261870515238",
  appId: "1:261870515238:web:d133c275a69ce9ddefe2e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
