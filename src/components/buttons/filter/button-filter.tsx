import * as S from "./button-filter.styled";
import { z } from "zod";

interface FilterButtonProps {
  title: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const schema = z.object({
  title: z.string(),
  style: z.object({}).optional(),
});

const FilterButton: React.FC<FilterButtonProps> = ({ title, style, onClick }) => {
  const result = schema.safeParse({ title, style });

  if (!result.success) {
    console.error(result.error);
    return null;
  }

  return <S.Button style={style} onClick={onClick}>{title}</S.Button>;
};
export default FilterButton;
