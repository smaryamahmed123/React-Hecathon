import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAAXNOvxy_E70fA3lBYu2p1VhpY573GlKc",
    authDomain: "reacthecathon-4a9c1.firebaseapp.com",
    projectId: "reacthecathon-4a9c1",
    storageBucket: "reacthecathon-4a9c1.appspot.com",
    messagingSenderId: "13714750442",
    appId: "1:13714750442:web:cdec239bb7c75027101093"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const storage = getStorage(app);
export {db, auth, storage}