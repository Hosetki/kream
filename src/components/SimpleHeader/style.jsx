import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 130px;
    padding: 0 95px;
    box-sizing: border-box;
    position: fixed;
    background-color: white;
`

export const Nav = styled.div`
    width: 100%;
    height: 22px;
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    align-items: center;
    box-sizing: border-box;
    padding: 8px 40px 0;
    > a,p{
        text-decoration: none;
        font-size: 12px;
        color: rgba(34, 34, 34, 0.8);
    }
`

export const HeaderBody = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    box-sizing: border-box;
`

export const Logo = styled.img`
    width: 115px;
    height: 19px;   
`

export const Rigth = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 45px;
`

export const R_Link = styled.h1`
    font-size: 18px;
    font-weight: 400;
    a{
        color: black;
        text-decoration: none;
    }
`