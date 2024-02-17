import React, { useState } from "react";
import styled from "styled-components";

// Definindo tipos
interface CarouselProps {
  photos: string[];
}

// Estilos do componente
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative; // Adicionado para posicionamento dos botões
`;
const Slide = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s ease;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

// Componente do Carrossel
const Carousel: React.FC<CarouselProps> = ({ photos }) => {
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

  return (
    <Container>
      {photos.map((photo, index) => (
        <Slide
          key={index}
          src={photo}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            opacity: index === currentSlide ? 1 : 0,
          }}
        />
      ))}
      <Button onClick={prevSlide} style={{ left: 10 }}>
        Anterior
      </Button>
      <Button onClick={nextSlide} style={{ right: 10 }}>
        Próximo
      </Button>
    </Container>
  );
};

export default Carousel;
