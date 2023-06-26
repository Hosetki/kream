import * as S from "./style"
import product01 from "../../assets/products/product01.webp"

const Product = () => {
    return (
        <S.Container>
            <S.ProductImg image={product01}></S.ProductImg>
            <S.ProductTitle>Crocs</S.ProductTitle>
            <S.ProductSubTittle>Crocs x Salehe Bembury Pollex Clog Horchata</S.ProductSubTittle>
            <S.ProductPrice>188,000원</S.ProductPrice>
            <S.RightNow>즉시 구매가</S.RightNow>
        </S.Container>
    );
};

export default Product;