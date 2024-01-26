import { TextInput } from "../../input/text-input/text-input.styled";
import * as S from "./home-card.styled";

const HomeCard = () => {
  return (
    <S.Container>
      <TextInput placeholder="Nome" />
    </S.Container>
  );
};

export default HomeCard;