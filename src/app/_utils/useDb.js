import { initializeApp } from "firebase/app";

import { Firestore, getFirestore } from "firebase/firestore";

// konfigurace firebase
const firebaseConfig = {
  apiKey: "AIzaSyBd0sOr9svVEcsHxd5fLT1tFRQ06Kfqz5o",
  authDomain: "blog-edefa.firebaseapp.com",
  projectId: "blog-edefa",
  storageBucket: "blog-edefa.appspot.com",
  messagingSenderId: "37894909212",
  appId: "1:37894909212:web:3cf588a9212530ce9e1ed9",
};

// propojeni s firebase
const useDb = () => {
  initializeApp(firebaseConfig);
  const db = getFirestore();

  return db;
};

export default useDb;
