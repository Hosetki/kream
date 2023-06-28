import { styled } from "styled-components";

export const Container = styled.div`
    width: 294px;
    height: 350px;
    margin-bottom: 30px;
`

export const ProductImg = styled.div`
    width: 100%;
    height: 294px;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 8px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-color: rgb(242,242,242);
    cursor: pointer;
`

export const ProductTitle = styled.h2`
    font-size: 13px;
    font-weight: 700;
    margin-top: 5px;
    color: #222;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const ProductSubTittle = styled.p`
    line-height: 16px;
    max-height: 34px;
    overflow: hidden;
    white-space: normal;
    font-size: 13px;
    color: #222;
    margin-bottom: 8px;
`

export const ProductPrice = styled.p`
    display: inline-block;
    vertical-align: top;
    line-height: 17px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -.04px;
`

export const RightNow = styled.p`
    line-height: 13px;
    font-size: 11px;
    color: rgba(34,34,34,.5);
    margin-top: 2px;
`

export const Rank = styled.div`
    width: 26px;
    height: 26px;
    background-color: rgb(100, 106, 118);
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`