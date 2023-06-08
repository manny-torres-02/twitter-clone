// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe4nrwOKYmg7RK6cU4hTtNO-823DicSNA",
  authDomain: "test-twitter-clone-2e3a5.firebaseapp.com",
  projectId: "test-twitter-clone-2e3a5",
  storageBucket: "test-twitter-clone-2e3a5.appspot.com",
  messagingSenderId: "475121478163",
  appId: "1:475121478163:web:80922fb9c54ceafebaede6",
  measurementId: "G-MXL4W8TRL7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;