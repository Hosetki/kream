import { styled } from "styled-components";

export const Container = styled.div`
    width: 196px;
    height: 260px;
    background-color: #e1e1e1;
    border-radius: 10px;
    background-image: url(${props => props.back});
    background-size: cover;
`

export const Profile = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: black;
    margin: 8px 0 0 8px;
    border: 2px solid white;
    background-image: url(${props => props.profile});
    background-size: cover;
`