import * as S from "./button-filter.styled";
import { z } from "zod";
interface FilterButtonProps {
  title: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
}

const schema = z.object({
  title: z.string(),
  style: z.object({}).optional(),
  id: z.string(),
});

const FilterButton: React.FC<FilterButtonProps> = ({
  title,
  style,
  onClick,
  id,
}) => {
  const result = schema.safeParse({ title, style, id });

  if (!result.success) {
    console.error(result.error);
    return null;
  }
 
  return (
    <S.Button style={style} onClick={onClick} id={id}>
      {title}
    </S.Button>
  );
};
export default FilterButton;
