import {styled} from "styled-components";

export const Container = styled.div`
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
  letter-spacing: -.16px;
  font-weight: 700
`

export const ServiceDetail = styled.div`
  max-width: 312px;
  line-height: 16px;
  padding-top: 3px;
  font-size: 14px;
  color: gray;
  
`

export const ServiceButton = styled.div`
    background: black;
  color: white;
  text-align: center;
  width: 96px;
  height: 34px;
  font-size: 13px;
  font-weight: 800;
  align-items: center;
  line-height: 34px;
  padding: 2px;
`

export const CustomerService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: start;
`