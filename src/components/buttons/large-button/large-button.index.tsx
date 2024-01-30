import { ButtonProps } from "../../../types/button/types.button";
import { ButtonSchema } from "../../../schemas/button.schema";
import { LargeButton } from "./large-button.styled";

export const LargeButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  id,
  className,
  style,
}) => {
  const result = ButtonSchema.safeParse({
    children,
    onClick,
    id,
    className,
    style,
  });
  if (!result.success) {
    console.error(result.error);
    return null;
  }
  return (
    <LargeButton onClick={onClick} id={id} className={className} style={style}>
      {children}
    </LargeButton>
  );
};
