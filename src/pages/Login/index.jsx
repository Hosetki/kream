import SimpleHeader from "../../components/SimpleHeader";
import * as S from "./style"
import LoginTitle from "../../assets/login_title.png"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <SimpleHeader />
            <S.Container>
                <S.InputArea>
                    <S.LoginTitle src={LoginTitle}/>
                    <S.Inputs>
                        <S.InputTitle>이메일 주소</S.InputTitle>
                        <S.Input placeholder="예) kream@kream.co.kr" type="email"/>
                    </S.Inputs>
                    <S.Inputs>
                        <S.InputTitle>비밀번호</S.InputTitle>
                        <S.Password type="password"/>
                    </S.Inputs>
                    <S.LoginBtn><Link to="/">로그인</Link></S.LoginBtn>
                    <S.SignUp><Link to="/join">이메일 가입</Link></S.SignUp>
                </S.InputArea>
            </S.Container>
        </div>
    );
};

export default Login;