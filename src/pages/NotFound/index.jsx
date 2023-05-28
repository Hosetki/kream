import SimpleHeader from "../../components/SimpleHeader";
import * as S from "./style"
import NotFound from "../../assets/404.svg"
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <>
        <SimpleHeader />
            <S.Container>
                <S.Img src={NotFound}/>
                <S.Title>찾을 수 없는 페이지입니다.</S.Title>
                <S.SubTitle>주소가 올바르지 않거나 알 수 없는 오류로 인해 페이지를 찾을 수 없습니다.</S.SubTitle>
                <S.BtnHome><Link to="/">홈으로 가기</Link></S.BtnHome>
            </S.Container>
        </>
    );
};

export default Notfound;