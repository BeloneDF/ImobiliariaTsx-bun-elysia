import styled from "styled-components";

export const Button = styled.button`
transition: all 0.2s ease-in-out;
  display: flex;
  width: 20%;
  height: 80%;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  align-items: center;
  display:flex;
  justify-content:center;
  text-transform: capitalize;
  &:active{
    background-color: #e5e5e5;
  }
`;
