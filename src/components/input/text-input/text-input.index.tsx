import * as S from "./text-input.styled.ts";
import { InputProps } from "../../../types/input/types.input.ts";
import { InputSchema } from "../../../schemas/input-schema.ts";

export const TextInput: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  style,
  type,
  name,
  id,
  className,
  required,
}) => {
  const result = InputSchema.safeParse({
    placeholder,
    value,
    onChange,
    style,
    type,
    name,
    id,
    className,
    required,
  });

  if (!result.success) {
    console.error(result.error);
    return null;
  }
  return (
    <S.TextInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      type={type}
      name={name}
      id={id}
      className={className}
      required={required}
    />
  );
};
