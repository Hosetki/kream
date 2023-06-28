import { Link } from "react-router-dom";
import SimpleHeader from "../../components/SimpleHeader/index"
import * as S from "./style"

const SignUP = () => {
    return (
        <div>
            <SimpleHeader />
            <S.Container>
                <S.InputArea>
                    <S.SignUpTitle>회원가입</S.SignUpTitle>
                    <S.Inputs>
                        <S.InputTitle>이메일 주소</S.InputTitle>
                        <S.Input placeholder="예) kream@kream.co.kr" type="email"/>
                    </S.Inputs>
                    <S.Inputs>
                        <S.InputTitle>비밀번호</S.InputTitle>
                        <S.Password type="password"/>
                    </S.Inputs>
                    <Link to="/login">가입하기</Link>
                </S.InputArea>
            </S.Container>
        </div>
    );
};

export default SignUP;