import React, { useCallback, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Slider from "../../components/Slider";
import StyleCard from "../../components/StyleCard";
import { cardData } from "../../data/card";
import { productData, popularData, newInData } from "../../data/product";
import { brandData } from "../../data/brand";
import { styleData } from "../../data/styles";
import * as S from "./style";
import banner01 from "../../assets/banner/banner01.webp";
import banner02 from "../../assets/banner/banner02.webp";
import MainSlider from "../../components/Slider";

const Main = () => {
  const [more, setMore] = useState(false);
  const toggleMore = useCallback(() => {
    setMore((prev) => !prev);
  }, []);

  const renderCardItems = (start, end) => {
    return cardData.slice(start, end).map((card, index) => (
      <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <S.Card image={card.image} />
        <S.CardTitle>{card.title}</S.CardTitle>
      </div>
    ));
  };

  const renderProductItems = (data) => {
    return data.map((product, index) => (
      <Product
        key={index}
        image={product.image}
        color={product.color}
        brand={product.brand}
        name={product.name}
        price={product.price}
      />
    ));
  };

  const renderBrandItems = () => {
    return brandData.map((brand, index) => (
      <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <S.Card image={brand.image} />
        <S.CardTitle>{brand.title}</S.CardTitle>
      </div>
    ));
  };

  const renderStyleCards = () => {
    return styleData.map((style, index) => (
      <StyleCard key={index} profile={style.profile} background={style.background} />
    ));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Header />
      <S.Container>
        <S.Banner src={banner01}/>
        <S.ShortCut>
          <S.Cards>{renderCardItems(0, 5)}</S.Cards>
          <S.Cards>{renderCardItems(5, 10)}</S.Cards>
        </S.ShortCut>
        <S.Horz></S.Horz>
        <S.HomeProduct>
          <S.ProductTitle>Just Dropped</S.ProductTitle>
          <S.ProductSubTitle>발매 상품</S.ProductSubTitle>
          <S.Products>{renderProductItems(productData.slice(0, 4))}</S.Products>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
            {!more && (
              <>
                <S.ViewMore onClick={toggleMore}>더보기</S.ViewMore>
                <S.Horz />
              </>
            )}
          </div>
          {more && (
            <>
              <S.Products>{renderProductItems(productData.slice(4, 8))}</S.Products>
              <S.Horz />
            </>
          )}
        </S.HomeProduct>
        <S.HomeProduct>
          <S.ProductTitle>Brand Focus</S.ProductTitle>
          <S.ProductSubTitle>추천 브랜드</S.ProductSubTitle>
          <S.Brands>{renderBrandItems().slice(0, 5)}</S.Brands>
          <S.Brands>{renderBrandItems().slice(5, 10)}</S.Brands>
          <S.Brands>{renderBrandItems().slice(10, 15)}</S.Brands>
        </S.HomeProduct>
        <S.Banner src={banner01} />
        <S.HomeProduct>
          <S.ProductTitle>Just Dropped</S.ProductTitle>
          <S.ProductSubTitle>발매 상품</S.ProductSubTitle>
          <S.Products>{renderProductItems(popularData.slice(0, 4))}</S.Products>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
            {!more && (
              <>
                <S.ViewMore onClick={toggleMore}>더보기</S.ViewMore>
                <S.Horz />
              </>
            )}
          </div>
          {more && (
            <>
              <S.Products>{renderProductItems(popularData.slice(4, 8))}</S.Products>
              <S.Horz />
            </>
          )}
        </S.HomeProduct>
        <S.HomeProduct>
          <S.ProductTitle style={{ marginBottom: "10px" }}>비 와도 패션은 맑음! #장마철코디</S.ProductTitle>
          <S.Styles>{renderStyleCards()}</S.Styles>
        </S.HomeProduct>
        <S.Banner src={banner02} />
        <S.HomeProduct>
            <S.ProductTitle>New In</S.ProductTitle>
            <S.ProductSubTitle>신규 등록 상품</S.ProductSubTitle>
            <S.Products>{renderProductItems(newInData.slice(0,4))}</S.Products>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
            {!more && (
              <>
                <S.ViewMore onClick={toggleMore}>더보기</S.ViewMore>
                <S.Horz />
              </>
            )}
          </div>
          {more && (
            <>
              <S.Products>{renderProductItems(newInData.slice(4, 8))}</S.Products>
            </>
          )}
        </S.HomeProduct>
      </S.Container>
      <Footer />
    </div>
  );
};

export default Main;
