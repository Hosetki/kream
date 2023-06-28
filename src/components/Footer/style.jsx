import {styled} from "styled-components";

export const Container = styled.div`
    width: 1280px;
    height: 546px;
    bottom: 0;
    padding: 50px 40px;
    box-sizing: border-box;
    border-top: 1px solid #e1e1e1;
  width: 100%;
  height: 546px;
  bottom: 0;
  padding: 50px 40px;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
`

export const MenuBox = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: first baseline;
`

export const MenuTitle = styled.span`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 10px;
`

export const MenuItem = styled.span`
  font-size: 14px;
  margin-top: 10px;
  letter-spacing: -0.5px;
  color: #8b8b8b;
`

export const ServiceArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-direction: row-reverse;
  padding-bottom: 56px;
  border-bottom: 1px solid #ebebeb
`

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

export const FooterWarp = styled.div`
    padding: 10px 40px;
    `

export const ServiceTitle = styled.div`
    display: inline-block;
    align-items: center;
    font-size: 16px;
`