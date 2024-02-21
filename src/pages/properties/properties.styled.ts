import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainCard = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  overflow-y: scroll;
  padding: 10px;
  flex-wrap: wrap;
  margin: 0 auto;
`;
