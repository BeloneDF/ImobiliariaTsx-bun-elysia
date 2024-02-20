import styled from "styled-components";

export const Section = styled.section`
  width: 50%;
  height: 70%;
  padding: 20px;
  //border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: #1b2d51;
  justify-content: space-between;
`;

export const InfoContainer = styled.section`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
`;

export const CardInfo = styled.div`
  width: 49%;
  background-color: white;
  border-radius: 10px;
  height: 98%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  bottom: 10px;
`;
