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
}