import * as S from "./button-filter.styled";
import { z } from "zod";

interface FilterButtonProps {
  title: string;
  style?: React.CSSProperties;
}

const FilterButton: React.FC<FilterButtonProps> = ({ title, style }) => {
  return <S.Button style={style}>{title}</S.Button>;
};
export default FilterButton;
