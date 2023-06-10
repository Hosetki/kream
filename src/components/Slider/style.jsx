import { styled } from "styled-components";

export const ImgArea = styled.div`
  width: 100vw;
  height: 480px;
  background-color: #e1e1e1;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  position: absolute;
  height: 460px;
  opacity: ${(props) => (props.current ? 0 : 1)};
  transition: ease-in-out 1s;
`;

