
import firebase from "firebase";

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