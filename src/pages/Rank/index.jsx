import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import * as H from "../Main/style"
import { cardData } from '../../data/card';
import { productData } from '../../data/product';
import Product from '../../components/Product';

const Rank = () => {
    const [more, setMore] = useState(false);
    const toggleMore = useCallback(() => {
        setMore((prev) => !prev);
    }, []);
    return (
        <div>
            <Header />
            <H.Container>
                <H.HomeProduct style={{ marginTop: "50px" }}>
                    <H.ProductTitle>지금 주목받는 상품</H.ProductTitle>
                    <H.Products>
                        {
                            productData.slice(0, 4).map((product, index) => (
                                <Product
                                    rank={index + 1}
                                    image={product.image}
                                    color={product.color}
                                    brand={product.brand}
                                    name={product.name}
                                    price={product.price}
                                />
                            ))
                        }
                    </H.Products>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
                        {!more ? <H.ViewMore onClick={toggleMore}>더보기</H.ViewMore> : null}
                    </div>
                    <H.Products>
                        {
                            more ? <H.Products>
                                {productData.slice(4, 8).map((product, index) => (
                                    <Product
                                        image={product.image}
                                        color={product.color}
                                        brand={product.brand}
                                        name={product.name}
                                        price={product.price}
                                    />
                                ))}
                            </H.Products> : <></>
                        }
                    </H.Products>
                </H.HomeProduct>
                <H.Horz />
            </H.Container>
        </div>
    );
};

export default Rank;