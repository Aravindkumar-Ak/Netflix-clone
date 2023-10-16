import {initializeApp} from "firebase/app";
import{getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAdkpZLd8aGbo9o5pAW9W2LTnDxbFdt9vM",
    authDomain: "netflix-clone-project-ab6bc.firebaseapp.com",
    projectId: "netflix-clone-project-ab6bc",
    storageBucket: "netflix-clone-project-ab6bc.appspot.com",
    messagingSenderId: "627641533780",
    appId: "1:627641533780:web:058ae3f5da6a1b0a04f4c1",
    measurementId: "G-LVKQ2YETQJ"
  };

  const app=initializeApp(firebaseConfig);
  const auth=getAuth();
  const db=getFirestore();

  export {app,auth,db};