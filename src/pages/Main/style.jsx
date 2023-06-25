import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 300vh;
    padding: 120px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    gap: 50px;
`

export const ShortCut = styled.div`
    width: 100%;
    height: 270px;
    background-color: #e1e1e1;
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