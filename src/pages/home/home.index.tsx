import S from "./home.styled";
import logo from "../../assets/imageTest.png";
import HomeCard from "../../components/cards/home-card/home-card.index";
import HomeFilter from "../../components/filter/home-filter/home-filter.index";

const Home = () => {
  return (
    <S.Contaier>
      <S.FilterContainer>
        <HomeFilter />
        <HomeCard />
      </S.FilterContainer>
      <S.ImageContainer>
        <S.Image src={logo} />
      </S.ImageContainer>
    </S.Contaier>
  );
};

export const HomePage = Home;
