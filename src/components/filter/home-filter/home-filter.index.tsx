import FilterButton from "../../buttons/filter/button-filter";
import * as S from "./home-filter.styled";
import { useSearchParams } from "react-router-dom";

const HomeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams(
    new URLSearchParams(window.location.href)
  );

  const handleFilter = (filter: string) => {
    searchParams.get("filter");
    setSearchParams({ filter: filter });
  };

  return (
    <S.Container>
      <FilterButton
        title={"Alugar"}
        style={{ borderRadius: "10px 0px 0px 0px" }}
        onClick={() => handleFilter("rent")}
        id="rent"
      />
      <FilterButton
        title={"Comprar"}
        onClick={() => handleFilter("buy")}
        id="buy"
      />
      <FilterButton
        id="sell"
        title={"Vender"}
        style={{ borderRadius: "0px 10px 0px 0px" }}
        onClick={() => handleFilter("sell")}
      />
    </S.Container>
  );
};

export default HomeFilter;