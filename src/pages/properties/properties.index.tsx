import { useState, useEffect } from "react";
import * as S from "./properties.styled";
import axios from "axios";
import { Imovel } from "../../types/data/properties/properties.types";
import CardPropertie from "../../components/cards/propertie-card/propertie-card.index";

const Properties = () => {
  const [propertie, setPropertie] = useState<Imovel[]>([]);

  async function getPropertirs() {
    try {
      const response = await axios.get("http://localhost:3001/imovel");
      setPropertie(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPropertirs();
  }, []);
  return (
    <S.Container>
      <S.MainCard>
        {propertie.map((properties) => {
          return <CardPropertie key={properties.id} {...properties}></CardPropertie>;
        })}
      </S.MainCard>
    </S.Container>
  );
};

export const PropertiesPage = Properties;
