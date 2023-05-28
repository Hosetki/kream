import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Slider from "../../components/Slider"
import * as S from "./style"

const Main =()=>{
    return(
        <>
            <Header />
                <S.Container>
                <Slider />
                </S.Container>
            <Footer />
        </>
    )
}

export default Main;