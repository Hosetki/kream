import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 650vh;
    padding: 130px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    gap: 40px;
`

export const ShortCut = styled.div`
    width: 100%;
    height: 270px;
`

export const Cards = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    gap: 10px;
    margin: 0;
`

export const Card = styled.div`
    width: 233px;
    height: 100px;
    background-image: url(${props => props.image});
    border-radius: 10px;
    background-color: blue;
    background-size: cover;
    cursor: pointer;
`

export const CardTitle = styled.p`
    font-size: 15px;
    letter-spacing: -.15px;
    color: #333;
    margin-top: 8px;
`

export const Horz = styled.div`
    max-width: 1200px;
    margin: 28px auto 20px;
    display: block;
    width: 100%;
    height: 1px;
    background: #ebebeb;
`

export const HomeProduct = styled.div`
    width: 100%;
`

export const ProductTitle = styled.h1`
    font-size: 17px;
    font-weight: 700;
    color: #000;
`

export const ProductSubTitle = styled.p`
    margin-top: 2px;
    margin-bottom: 5px;
    font-size: 16px;
    color: rgba(34,34,34,.5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 262px;
`

export const Products = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
`

export const ViewMore = styled.button`
    border: 1px solid #d3d3d3;
    color: rgba(34,34,34,.8);
    width: 100px;
    height: 43px;
    border-radius: 10px;
    background-color: rgb(255,255,255);
    cursor: pointer;
`

export const Brands = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    margin: 0;
`

export const Banner = styled.img`
    width: 100vw;
`

export const Styles = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
`