import S from "./home.styled";
import logo from "../../assets/imageTest.png";
import HomeCard from "../../components/cards/home-card/home-card.index";
import HomeFilter from "../../components/filter/home-filter/home-filter.index";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterState, setFilterState] = useState<string>("");

  useEffect(() => {
    if (!searchParams.get("filter")) {
      setSearchParams({ filter: "rent" });
    }
    setFilterState(searchParams.get("filter") || "");
  }, [searchParams]);

  return (
    <S.Contaier>
      <S.FilterContainer>
        <HomeFilter/>
        <HomeCard filterState={filterState} />
      </S.FilterContainer>
      <S.ImageContainer>
        <S.Image src={logo} />
      </S.ImageContainer>
    </S.Contaier>
  );
};

export const HomePage = Home;
