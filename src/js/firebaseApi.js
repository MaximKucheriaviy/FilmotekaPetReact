import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAgqdEhIQbk_mDv1V5SrOl1QtD4EodOPHk",
    authDomain: "filmoteka-a7c8e.firebaseapp.com",
    projectId: "filmoteka-a7c8e",
    storageBucket: "filmoteka-a7c8e.appspot.com",
    messagingSenderId: "439873704206",
    appId: "1:439873704206:web:c959c49ed53666ce39475f",
    measurementId: "G-0C4KQZNVY8"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const singIn = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }
    catch(error){
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    };
}

export const singUp = async (email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }
    catch(error){
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    };
}