import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { cardData } from "../../data/card";
import * as S from "./style";

const Main = () => {
    return (
        <>
            <Header />
            <S.Container>
                <Slider></Slider>
                <S.ShortCut>
                    <S.Cards>
                        {cardData.slice(0, 5).map((card, index) => (
                            <div key={index} style={{display: "flex",flexDirection: "column",alignItems: "center",}}>
                                <S.Card image={card.image} />
                                <S.CardTitle>{card.title}</S.CardTitle>
                            </div>
                        ))}
                    </S.Cards>
                    <S.Cards>
                        {cardData.slice(5, 10).map((card, index) => (
                            <div key={index} style={{display: "flex",flexDirection: "column",alignItems: "center",}}>
                                <S.Card image={card.image} />
                                <S.CardTitle>{card.title}</S.CardTitle>
                            </div>
                        ))}
                    </S.Cards>
                </S.ShortCut>
            </S.Container>
            <Footer />
        </>
    );
};

export default Main;
