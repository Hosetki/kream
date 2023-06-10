import { Link, useLocation } from "react-router-dom"
import * as S from "./style"
import Logo from "../../assets/logo.svg"
import { FiSearch } from 'react-icons/fi';

const Header = () => {
    const location = useLocation();
    return (
        <S.Container>
            <S.Nav>
                <Link to="/notice">고객센터</Link>
                <Link to="/my/wish">마이페이지</Link>
                <Link to="/my/wish">관심상품</Link>
                <a>알림</a>
                <a>로그아웃</a>
            </S.Nav>
            <S.HeaderBody>
                <Link to="/"><S.Logo src={Logo} /></Link>
                <S.Rigth>
                    <S.R_Link isActive={location.pathname === "/"}><Link to="/">HOME</Link></S.R_Link>
                    <S.R_Link isActive={location.pathname === "/social"}><Link to="/social">STYLE</Link></S.R_Link>
                    <S.R_Link isActive={location.pathname === "/search"}><Link to="/search">SHOP</Link></S.R_Link>
                    <S.R_Link><Link to="/search"><FiSearch style={{ width: "28px", height: "28px" }} /></Link></S.R_Link>
                </S.Rigth>
            </S.HeaderBody>
            <S.Tabs>
                <S.Tab_Name currentSlider={location.pathname === "/"}><Link to="/">추천</Link></S.Tab_Name>
                <S.Tab_Name currentSlider={location.pathname === "/rank"}><Link to="/rank">랭킹</Link></S.Tab_Name>
                <S.Tab_Name currentSlider={location.pathname === "/mens"}><Link to="/mens">남성</Link></S.Tab_Name>
                <S.Tab_Name currentSlider={location.pathname === "/girls"}><Link to="/girls">여성</Link></S.Tab_Name>
                <S.Tab_Name currentSlider={location.pathname === "/brand"}><Link to="/brand">브랜드</Link></S.Tab_Name>
            </S.Tabs>
        </S.Container>
    )
}

export default Header