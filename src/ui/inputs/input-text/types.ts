interface InputTextProps {
  value: string;
  placeholder: string;
  pattern?: RegExp;
  isDisabled?: boolean;
  isRequired?: boolean;
  type?: 'text' | 'number';
}

export type { InputTextProps };
