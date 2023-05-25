import { Link } from "react-router-dom"
import * as S from "./style"
import Logo from "../../assets/logo.png"
import { FiSearch } from 'react-icons/fi';

const Header =()=>{
    return(
        <S.Container>
            <S.Nav>
                <Link to="/notice">고객센터</Link>
                <Link to="/my/wish">관심상품</Link>
                <a>알림</a>
                <a>로그인</a>
            </S.Nav>
            <S.HeaderBody>
                <Link to="/"><S.Logo src={Logo}/></Link>
                <S.Rigth>
                    <S.R_Link><Link to="/">HOME</Link></S.R_Link>
                    <S.R_Link><Link to="/social">STYLE</Link></S.R_Link>
                    <S.R_Link><Link to="/search">SHOP</Link></S.R_Link>
                    <S.R_Link><Link to="/my">MY</Link></S.R_Link>
                    <S.R_Link><Link to="/search"><FiSearch style={{width: "28px", height: "28px"}} /></Link></S.R_Link>
                </S.Rigth>
            </S.HeaderBody>
            <S.Tabs>
                <S.Tab_Name><Link to="/">추천</Link></S.Tab_Name>
                <S.Tab_Name><Link to="/rank">랭킹</Link></S.Tab_Name>
                <S.Tab_Name><Link to="/mens">남성</Link></S.Tab_Name>
                <S.Tab_Name><Link to="/girls">여성</Link></S.Tab_Name>
                <S.Tab_Name><Link to="/brand">브랜드</Link></S.Tab_Name>
            </S.Tabs>
        </S.Container>
    )
}

export default Header