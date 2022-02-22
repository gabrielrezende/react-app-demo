import styled from "styled-components";

export const Button = styled.button`
  border-radius: 7px;
  height: 40px;
  box-shadow: 2px 3px 3px #333;
  border: none;
  cursor: pointer;
  width:  ${props => props.width};
  color:  ${props => props.fontColor};
  background-color:  ${props => props.backgroundColor};
  
  &:hover {
    filter: brightness(95%);
  }
`;