import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebaseInit";

const signUp = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export default signUp