import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const login = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        localStorage.setItem("user",user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(`로그인중 에러가 발생했습니다 ${errorCode}:${errorMessage}`)
    });

export default login