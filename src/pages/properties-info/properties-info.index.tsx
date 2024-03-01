import { Container, MainCard } from "../properties/properties.styled";
import { useParams } from "react-router-dom";
import api from "../../api/api.index";
import { useEffect, useState } from "react";
import * as S from "./properties-info.styled";
import Carousel from "../../components/carousel/crousel.index";
import { Imovel, Fotos } from "../../types/data/properties/properties.types";
import {
  ShowerIcon,
  AreaIcon,
  BedRoomIcon,
  Suits,
  IconSection,
  CardIcon,
} from "../../components/cards/propertie-card/propertie-card.styled";
import { LocationOn } from "@styled-icons/material/LocationOn";
import ContactCard from "../../components/cards/contact-propertie/contact-propertie.index";

const PropertiesInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Imovel>();
  const [photos, setPhotos] = useState<Fotos[]>([]);

  async function getPropertyById(id: string | undefined) {
    try {
      const response = await api.get(`/imovel/${id}`);
      setPhotos(
        response.data.data.fotos.map((index: Fotos) => {
          return index.foto;
        })
      );
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
      <MainCard
        style={{
          flexDirection: "column",
          display: "flex",
          flexWrap: "nowrap",
          gap: 40,
        }}
      >
        {data && (
          <>
            <S.InfoPropertie>
              <S.Section>
                <Carousel photos={photos} data={data} />
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
                        paddingLeft: "4%",
                        marginTop: 10,
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
                        paddingLeft: "4%",
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
                        paddingLeft: "4%",
                      }}
                    >
                      <CardIcon>
                        <AreaIcon></AreaIcon>
                      </CardIcon>
                      {data.area}m²
                    </IconSection>
                    <IconSection
                      style={{
                        justifyContent: "flex-start",
                        width: "100%",
                        alignItems: "center",
                        gap: 10,
                        paddingLeft: "4%",
                      }}
                    >
                      <CardIcon>
                        <Suits></Suits>
                      </CardIcon>
                      {data.suite}
                    </IconSection>
                    <IconSection
                      style={{
                        justifyContent: "flex-start",
                        width: "100%",
                        alignItems: "center",
                        gap: 10,
                        paddingLeft: "4%",
                      }}
                    >
                      <CardIcon>
                        <LocationOn style={{ width: 20, color: "white" }} />
                      </CardIcon>
                      {data.cidade}
                    </IconSection>
                  </S.CardInfo>
                  <S.CardInfo style={{ width: "68%" }}>
                    <div
                      style={{ display: "inline-block", textAlign: "justify" }}
                    >
                      {data.description}
                    </div>
                  </S.CardInfo>
                </S.InfoContainer>
              </S.Section>
            </S.InfoPropertie>
            <S.ContactPropertie>
              <ContactCard id={data.id}></ContactCard>
            </S.ContactPropertie>
          </>
        )}
      </MainCard>
    </Container>
  );
};

export const PropertiesInfoPage = PropertiesInfo;
