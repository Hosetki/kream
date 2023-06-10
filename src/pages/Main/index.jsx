import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Slider from "../../components/Slider"
import * as S from "./style"

const Main = () => {
    return (
        <>
            <Header />
            <S.Container>
                <Slider></Slider>
                <S.ShortCut>
                    <S.Cards>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                    </S.Cards>
                    <S.Cards>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                        <S.Card></S.Card>
                    </S.Cards>
                </S.ShortCut>
            </S.Container>
            <Footer />
        </>
    )
}

export default Main;