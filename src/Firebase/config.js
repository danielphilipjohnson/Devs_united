import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC9zNImaffEMzrLCuJhkEvAfPE4OojBMCs",
    authDomain: "devs-united-cyfy.firebaseapp.com",
    projectId: "devs-united-cyfy",
    storageBucket: "devs-united-cyfy.appspot.com",
    messagingSenderId: "305538195994",
    appId: "1:305538195994:web:a8c7c50e751dcb24dc27a3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();
  const provider = new GoogleAuthProvider();

  const getRefCollection = (collectionPath) => collection(db, collectionPath);

  export { db, getRefCollection, provider };

  export default app;