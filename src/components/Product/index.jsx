import * as S from "./style"

const Product = (props) => {
    console.log(props.color)
    return (
        <S.Container>
            <S.ProductImg image={props.image}>
                {props.rank ? <S.Rank>{props.rank}</S.Rank> : <></>}
            </S.ProductImg>
            <S.ProductTitle>{props.brand}</S.ProductTitle>
            <S.ProductSubTittle>{props.name}</S.ProductSubTittle>
            <S.ProductPrice>{props.price}원</S.ProductPrice>
            <S.RightNow>즉시 구매가</S.RightNow>
        </S.Container>
    );
};

export default Product;