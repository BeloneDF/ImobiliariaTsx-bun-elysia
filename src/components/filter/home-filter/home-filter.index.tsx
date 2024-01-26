import FilterButton from "../../buttons/filter/button-filter";
import * as S from "./home-filter.styled";

const HomeFilter = () => {
  return (
    <S.Container>
      <FilterButton
        title={"algo"}
        style={{ borderRadius: "10px 0px 0px 0px" }}
      />
      <FilterButton title={"algo2"} />
      <FilterButton
        title={"algo3"}
        style={{ borderRadius: "0px 10px 0px 0px" }}
      />
    </S.Container>
  );
};

export default HomeFilter;
