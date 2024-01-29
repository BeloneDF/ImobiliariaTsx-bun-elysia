import RentBuy from "../../filter/rent-buy/rent-buy.index";
import { TextInput } from "../../input/text-input/text-input.styled";
import * as S from "./home-card.styled";
import { z } from "zod";

interface HomeCardProps {
  filterState: string;
}
type FilteredType = {
  [key: string]: JSX.Element | string;
};

const schema = z.object({
  filterState: z.string(),
});

const HomeCard: React.FC<HomeCardProps> = ({ filterState }) => {
  const result = schema.safeParse({ filterState });
  if (!result.success) {
    console.error(result.error);
    return null;
  }

  function getInputsFilter(filteredState: string) {
    const filtered: FilteredType = {
      rent: <RentBuy />,
      sell: <TextInput placeholder="Vender" />,
      buy: <TextInput placeholder="Comprar" />,
    };

    return filtered[filteredState] || "";
  }

  return <S.Container>{getInputsFilter(filterState)}</S.Container>;
};

export default HomeCard;
