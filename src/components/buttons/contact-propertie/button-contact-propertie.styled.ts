import styled from "styled-components";

export const Button = styled.button`
  border: none;
  transition: all 0.2s ease;
  color: white;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  font-size: 1rem;
  background-color: #1b2d51;
  padding: 10px;
  outline: none;
  font-weight: bold;
  font-family: quicksand;
  border-radius: 10px;
  border-bottom: 1px solid transparent;
  width: 95%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: #1b2d51;
    cursor: pointer;
    background-color: white;
    border: 2px solid #1b2d51;
  }
`;

export const WhatsappButton = styled.button`
  transition: all 0.2s ease;
  color: white;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  font-size: 0.8rem;
  background-color: green;
  padding: 10px;
  outline: none;
  font-weight: bold;
  font-family: quicksand;
  border-radius: 10px;
  border-bottom: 1px solid transparent;
  width: 95%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: #1b2d51;
    cursor: pointer;
    background-color: white;
  }
`;
