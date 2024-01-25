import S from "./home.styled";
import logo from "../../assets/imageTest.png";
const Home = () => {
  return (
    <S.Contaier>
      <S.FilterContainer>filtro and form</S.FilterContainer>
      <S.ImageContainer>
        <S.Image src={logo} />
      </S.ImageContainer>
    </S.Contaier>
  );
};

export const HomePage = Home;
