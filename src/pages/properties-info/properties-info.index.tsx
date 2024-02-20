import { Container, MainCard } from "../properties/properties.styled";
import { useParams } from "react-router-dom";
import api from "../../api/api.index";
import { useEffect, useState } from "react";
import * as S from "./properties-info.styled";
import Carousel from "../../components/carousel/crousel.index";
import { Imovel } from "../../types/data/properties/properties.types";
import {
  ShowerIcon,
  AreaIcon,
  BedRoomIcon,
  Suits,
  IconSection,
  CardIcon,
} from "../../components/cards/propertie-card/propertie-card.styled";

const PropertiesInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Imovel>();

  const fakePhotos = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/d32776",
    "https://via.placeholder.com/600/f66b97",
  ];

  async function getPropertyById(id: string | undefined) {
    try {
      const response = await api.get(`/imovel/${id}`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPropertyById(id);
  }, []);

  return (
    <Container>
      {data && (
        <MainCard
          style={{ flexDirection: "row", display: "flex", flexWrap: "nowrap" }}
        >
          <S.Section>
            <Carousel photos={fakePhotos} data={data} />
          </S.Section>
          <S.Section>
            <S.CardTitle>
              <h2>{data.title}</h2>
              <h4 style={{ color: "#1D5F77" }}>
                {data.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h4>
            </S.CardTitle>
            <S.InfoContainer>
              <S.CardInfo style={{ width: "30%" }}>
                <IconSection
                  style={{
                    justifyContent: "flex-start",
                    width: "100%",
                    alignItems: "center",
                    gap: 10,
                    paddingLeft: '4%',
                    marginTop: 10
                  }}
                >
                  <CardIcon>
                    <ShowerIcon></ShowerIcon>
                  </CardIcon>
                  {data.bathroom}
                </IconSection>
                <IconSection
                  style={{
                    justifyContent: "flex-start",
                    width: "100%",
                    alignItems: "center",
                    gap: 10,
                    paddingLeft: '4%',
                  }}
                >
                  <CardIcon>
                    <BedRoomIcon></BedRoomIcon>
                  </CardIcon>
                  {data.badroom}
                </IconSection>
                <IconSection
                  style={{
                    justifyContent: "flex-start",
                    width: "100%",
                    alignItems: "center",
                    gap: 10,
                    paddingLeft: '4%',
                  }}
                >
                  <CardIcon>
                    <AreaIcon></AreaIcon>
                  </CardIcon>
                  {data.area}m2
                </IconSection>
                <IconSection
                  style={{
                    justifyContent: "flex-start",
                    width: "100%",
                    alignItems: "center",
                    gap: 10,
                    paddingLeft: '4%',
                  }}
                >
                  <CardIcon>
                    <Suits></Suits>
                  </CardIcon>
                  {data.suite}
                </IconSection>
              </S.CardInfo>
              <S.CardInfo style={{ width: "68%" }}>
                {data.description}
              </S.CardInfo>
            </S.InfoContainer>
          </S.Section>
        </MainCard>
      )}
    </Container>
  );
};

export const PropertiesInfoPage = PropertiesInfo;
