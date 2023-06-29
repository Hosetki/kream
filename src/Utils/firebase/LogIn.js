import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {auth} from "./firebaseInit";
const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            const {email, accessToken, refreshToken} = user;
            localStorage.setItem("email", email);
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(`로그인중 에러가 발생했습니다 ${errorCode}:${errorMessage}`)
        });
}

export default login