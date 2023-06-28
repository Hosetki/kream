import { getAuth, signOut } from "firebase/auth";
import {auth} from "./firebaseInit";

const logout = () => {
    signOut(auth).then(() => {

        localStorage.delete("user")
        // Sign-out successful.
    }).catch((error) => {
        alert(`로그아웃중 에러가 발생했습니다`)
        // An error happened.
    });
}
export default logout