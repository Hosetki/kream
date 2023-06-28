import { Link } from "react-router-dom";
import SimpleHeader from "../../components/SimpleHeader/index"
import * as S from "./style"
import {useState} from "react";
import {getUser} from "../../Utils/auth/getAuth";
import signUp from "../../Utils/firebase/SignUp";

const SignUP = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const signUpUser = async () => {
        await signUp(email,password)
        return alert("회원가입 성공")
    }

    return (
        <div>
            <SimpleHeader />
            <S.Container>
                <S.InputArea>
                    <S.SignUpTitle>회원가입</S.SignUpTitle>
                    <S.Inputs>
                        <S.InputTitle>이메일 주소</S.InputTitle>
                        <S.Input placeholder="예) kream@kream.co.kr" type="email" onChange={emailChange} value={email}/>
                    </S.Inputs>
                    <S.Inputs>
                        <S.InputTitle>비밀번호</S.InputTitle>
                        <S.Password type="password" onChange={passwordChange} value={password}/>
                    </S.Inputs>
                    <Link to="/login" onClick={signUpUser}>가입하기</Link>
                </S.InputArea>
            </S.Container>
        </div>
    );
};

export default SignUP;