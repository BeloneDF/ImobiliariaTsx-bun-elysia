import React, { useState } from "react";
import * as S from "./carousel.styled";
import { Imovel } from "../../types/data/properties/properties.types";
//import { redirect } from "react-router-dom";

interface CarouselProps {
  photos: string[];
  data: Imovel;
  style?: object;
}

const Carousel: React.FC<CarouselProps> = ({ photos, data, style }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === photos.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? photos.length - 1 : prevSlide - 1
    );
  };

  const handleToProperty = (id: string) => {
    window.location.href = `/properties/${id}`;
    //redirect(`/properties/${id}`);
  };

  return (
    <S.Container style={style}>
      <S.Slide
        src={photos[currentSlide]}
        onClick={() => handleToProperty(data.id)}
        style={{ cursor: "pointer" }}
      />
      <S.Button onClick={prevSlide} style={{ left: 10 }}>
        {"<"}
      </S.Button>
      <S.Button onClick={nextSlide} style={{ right: 10 }}>
        {">"}
      </S.Button>
      <S.IndicatorsContainer>
        {photos.map((_, index) => (
          <S.Indicator
            key={index}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
      </S.IndicatorsContainer>
    </S.Container>
  );
};

export default Carousel;
