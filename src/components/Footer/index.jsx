import * as S from "./style"
import {ServiceTitle} from "./style";

const Footer = () => {
    return (<S.Container>
            <S.FooterWarp>
                <S.ServiceArea>
                    <S.CustomerService>
                        <S.ServiceTitle>고객센터 1588-7813</S.ServiceTitle>
                        <S.ServiceDetail>운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)
                            점심시간 평일 13:00 - 14:00</S.ServiceDetail>
                        <span style={{fontSize:'13px'}}>1:1 문의하기는 앱에서만 가능합니다.</span>
                        <S.ServiceButton>자주 묻는 질문</S.ServiceButton>
                    </S.CustomerService>
                    <S.FooterMenu>
                        <S.MenuBox>
                            <S.MenuTitle>이용안내</S.MenuTitle>
                            <S.MenuItem>검수기준</S.MenuItem>
                            <S.MenuItem>이용정책</S.MenuItem>
                            <S.MenuItem>패널티 정책</S.MenuItem>
                            <S.MenuItem>커뮤니티 가이드라인</S.MenuItem>
                        </S.MenuBox>
                        <S.MenuBox>
                            <S.MenuTitle>고객지원</S.MenuTitle>
                            <S.MenuItem>공지사항</S.MenuItem>
                            <S.MenuItem>서비스 소개</S.MenuItem>
                            <S.MenuItem>스토어 안내</S.MenuItem>
                            <S.MenuItem>판매자 방문접수</S.MenuItem>
                        </S.MenuBox>
                    </S.FooterMenu>
                </S.ServiceArea>

            </S.FooterWarp>
        </S.Container>);
};

export default Footer;