import styled from "styled-components";
import { Shower } from "@styled-icons/fa-solid/Shower";
import { BedroomChild } from "@styled-icons/material-outlined/BedroomChild";
import { Area } from "@styled-icons/boxicons-solid/Area";
import { Checkroom } from "@styled-icons/material/Checkroom";

export const Container = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  border-radius: 10px;
  margin-bottom: 20px;
  height: 45%;
  border: 1px solid #1b2d51;
`;

export const ImageSection = styled.section`
  height: 70%;
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ajuste para evitar interferência no layout do carrossel */
  overflow: hidden;
`;

export const ShowerIcon = styled(Shower)`
  width: 20px;
  color: white;
`;
export const BedRoomIcon = styled(BedroomChild)`
  width: 24px;
  color: white;
`;
export const AreaIcon = styled(Area)`
  width: 24px;
  color: white;
`;
export const Suits = styled(Checkroom)`
  width: 24px;
  color: white;
`;

export const IconSection = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardIcon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #1b2d51;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const InfoSection = styled.section`
  height: 30%;
  width: 100%;
  background-color: white;
  border-top: 1px solid #1b2d51;
  border-bottom: 1px solid #1b2d51;
  border-radius: 0px 0px 10px 10px;
`;

export const InfoSectionTitle = styled.section`
  height: 60%;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoSectionProperties = styled.section`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
