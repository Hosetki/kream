import SimpleHeader from "../../components/SimpleHeader";
import * as S from "./style"
import LoginTitle from "../../assets/login_title.png"
import { Link } from "react-router-dom";
import {useState} from "react";
import login from "../../Utils/firebase/LogIn";
import {getUser} from "../../Utils/auth/getAuth";

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const Loginuser = async () => {
        await login(email,password)
        return alert("로그인 성공")
    }


    return (
        <div>
            <SimpleHeader />
            <S.Container>
                <S.InputArea>
                    <S.LoginTitle src={LoginTitle}/>
                    <S.Inputs>
                        <S.InputTitle>이메일 주소</S.InputTitle>
                        <S.Input placeholder="예) kream@kream.co.kr" type="email" onChange={emailChange} value={email}/>
                    </S.Inputs>
                    <S.Inputs>
                        <S.InputTitle>비밀번호</S.InputTitle>
                        <S.Password type="password" onChange={passwordChange} value={password} />
                    </S.Inputs>
                    <S.LoginBtn onClick={Loginuser}><Link to="/">로그인</Link></S.LoginBtn>
                    <S.SignUp><Link to="/join">이메일 가입</Link></S.SignUp>
                </S.InputArea>
            </S.Container>
        </div>
    );
};

export default Login;