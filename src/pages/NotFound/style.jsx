import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Img= styled.img`
    width: 360px;
    height: 240px; 
`

export const Title = styled.p`
    font-size: 20px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -.2px;
    color: #000;
    margin-top: 20px;
`

export const SubTitle = styled.p`
    font-size: 13px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: rgba(34,34,34,.6);
    margin-top: 8px;
    width: 250px;
    text-align: center;
`

export const BtnHome = styled.button`
    width: 103px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,.6);
    background-color: white;
    margin-top: 20px;
    cursor: pointer;
    line-height: 2;
    color: #000;
    a{
        text-decoration: none;
        color: black;
    }
`