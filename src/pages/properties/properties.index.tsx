import { useState, useEffect } from "react";
import * as S from "./properties.styled";
import { Imovel } from "../../types/data/properties/properties.types";
import CardPropertie from "../../components/cards/propertie-card/propertie-card.index";
import api from "../../api/api.index";

const Properties = () => {
  const [propertie, setPropertie] = useState<Imovel[]>([]);

  async function getProperties() {
    try {
      console.log(1);
      const response = await api.get("/imovel");
      console.log(2);
      setPropertie(response.data.data);
      console.log(3);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <S.Container>
      <S.MainCard>
        {propertie.map((properties) => {
          return (
            <CardPropertie key={properties.id} {...properties}></CardPropertie>
          );
        })}
      </S.MainCard>
    </S.Container>
  );
};

export const PropertiesPage = Properties;
