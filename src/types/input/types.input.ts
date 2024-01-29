import { ReactNode } from "react";

export interface InputProps {
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: React.HTMLInputTypeAttribute;
  name?: string;
  id: string;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  label?: string;
}

export interface SelectProps {
  value: string;
  name?: string;
  id: string;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  children: ReactNode[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}
