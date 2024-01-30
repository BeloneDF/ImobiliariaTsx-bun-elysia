import styled from "styled-components";

export const LargeButton = styled.button`
  transition: all .5s ease;
  background-color: #1B2D51;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  width: 65%;
  height: 40px;

  &:hover{
    background-color: #fff;
    color: #1B2D51;
    border: 1px solid #1B2D51;
  }
`;