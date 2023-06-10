import { Link } from "react-router-dom"
import * as S from "./style"
import Logo from "../../assets/logo.svg"
import { FiSearch } from 'react-icons/fi';

const SimpleHeader =()=>{
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
                    <S.R_Link><Link to="/search"><FiSearch style={{width: "28px", height: "28px"}} /></Link></S.R_Link>
                </S.Rigth>
            </S.HeaderBody>
        </S.Container>
    )
}

export default SimpleHeader