import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
`;

export const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  aspect-ratio: 16/9
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 32px;
  color: #1b2d51;
  font-weight: bold;
  font-family: "Quicksand";
  height: 100%;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid white;
  &.active {
    background-color: white;
  }
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
