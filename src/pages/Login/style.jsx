import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 145px;
`

export const LoginTitle = styled.img`
    width: 250px;
    height: 56px;
    margin-bottom: 60px;
`

export const InputArea = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputTitle = styled.h3`
    font-size: 13px;
    letter-spacing: -.07px;
    line-height: 18px;
`

export const Inputs = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const Input = styled.input`
    padding: 8px 0;
    width: 100%;
    font-size: 15px;
    letter-spacing: -.15px;
    line-height: 22px;
    border: none;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
    &:focus{
        outline: none;
    }
`

export const Password = styled.input`
    padding: 8px 0;
    width: 100%;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 22px;
    border: none;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
    &:focus{
        outline: none;
    }
`

export const LoginBtn = styled.button`
    width: 100%;
    font-size: 16px;
    height: 52px;
    cursor: pointer;
    font-weight: 700;
    color: #fff;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 12px;
    margin-top: 12px;
     a{
        text-align: center;
        font-size: 13px;
        letter-spacing: -.07px;
        text-decoration: none;
        color: white;
    }
`

export const SignUp = styled.div`
    margin-top: 20px;
    a{
        text-align: center;
        font-size: 13px;
        letter-spacing: -.07px;
        text-decoration: none;
        color: black;
    }
`