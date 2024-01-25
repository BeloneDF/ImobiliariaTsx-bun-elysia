import S from "./button.header.styled";
import { z } from "zod";

const schema = z.object({
  path: z.string(),
  title: z.string(),
  isStarted: z.boolean().optional(),
});

interface Props {
  path: string;
  title: string;
  isStarted?: boolean;
}

const HeaderButton: React.FC<Props> = ({ path, title, isStarted }) => {
  const result = schema.safeParse({ path, title, isStarted });

  if (!result.success) {
    console.error(result.error);
    return null;
  }

  return isStarted ? (
    <S.ButtonGetStarted to={path}>{title}</S.ButtonGetStarted>
  ) : (
    <S.Button to={path}>{title}</S.Button>
  );
};

export default HeaderButton;
