import * as S from "./propertie-card.styled";
import { Imovel } from "../../../types/data/properties/properties.types";
import Carousel from "../../carousel/crousel.index";
import { LocationOn } from "@styled-icons/material/LocationOn";

const CardPropertie: React.FC<Imovel> = (data) => {
  const fakePhotos = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/d32776",
    "https://via.placeholder.com/600/f66b97",
  ];

  return (
    <S.Container>
      <S.ImageSection>
        <Carousel photos={fakePhotos} data={data}></Carousel>
      </S.ImageSection>
      <S.InfoSection>
        <S.InfoSectionTitle>
          <S.TitleSection style={{ marginLeft: 20 }}>
            {data.title}
          </S.TitleSection>
          <S.TitleSection
            style={{
              fontSize: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <section>
              <LocationOn style={{ width: 16, color: "#1b2d51" }} />
              {data.cidade}
            </section>
            {data.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </S.TitleSection>
        </S.InfoSectionTitle>
        <S.InfoSectionProperties>
          <S.IconSection>
            <S.CardIcon>
              <S.ShowerIcon />
            </S.CardIcon>
            {data.bathroom}
          </S.IconSection>
          <S.IconSection>
            <S.CardIcon>
              <S.BedRoomIcon />
            </S.CardIcon>
            {data.badroom}
          </S.IconSection>
          <S.IconSection
            style={{ justifyContent: "space-between", width: "17%" }}
          >
            <S.CardIcon>
              <S.AreaIcon />
            </S.CardIcon>
            {data.area}m²
          </S.IconSection>
          <S.IconSection>
            <S.CardIcon>
              <S.Suits />
            </S.CardIcon>
            {data.suite}
          </S.IconSection>
        </S.InfoSectionProperties>
      </S.InfoSection>
    </S.Container>
  );
};

export default CardPropertie;
