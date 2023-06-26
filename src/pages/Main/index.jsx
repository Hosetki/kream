import { useCallback, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Slider from "../../components/Slider";
import { cardData } from "../../data/card";
import { productData } from "../../data/product";
import * as S from "./style";

const Main = () => {
    const [more, setMore] = useState(false);
    const toggleMore = useCallback(() => {
        setMore((prev) => !prev);
    }, []);
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Header />
            <S.Container>
                <Slider></Slider>
                <S.ShortCut>
                    <S.Cards>
                        {cardData.slice(0, 5).map((card, index) => (
                            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                <S.Card image={card.image} />
                                <S.CardTitle>{card.title}</S.CardTitle>
                            </div>
                        ))}
                    </S.Cards>
                    <S.Cards>
                        {cardData.slice(5, 10).map((card, index) => (
                            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                <S.Card image={card.image} />
                                <S.CardTitle>{card.title}</S.CardTitle>
                            </div>
                        ))}
                    </S.Cards>
                </S.ShortCut>
                <S.Horz></S.Horz>
                <S.HomeProduct>
                    <S.ProductTitle>Just Dropped</S.ProductTitle>
                    <S.ProductSubTitle>발매 상품</S.ProductSubTitle>
                    <S.Products>
                        {productData.slice(0, 4).map((product, index) => (
                            <Product
                                image={product.image}
                                color={product.color}
                                brand={product.brand}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </S.Products>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
                        {!more ? <><S.ViewMore onClick={toggleMore}>더보기</S.ViewMore><S.Horz /></> : null}
                    </div>
                    {
                        more ? <><S.Products>
                            {productData.slice(4, 8).map((product, index) => (
                                <Product
                                    image={product.image}
                                    color={product.color}
                                    brand={product.brand}
                                    name={product.name}
                                    price={product.price}
                                />
                            ))}
                        </S.Products><S.Horz style={{ marginBottom: "100px" }} /> </> : ""
                    }
                </S.HomeProduct>
            </S.Container>
            <Footer />
        </div>
    );
};

export default Main;
