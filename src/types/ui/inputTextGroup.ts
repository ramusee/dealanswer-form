interface InputTextItem {
  value: string;
  placeholder: string;
  type?: 'number' | 'text';
  pattern?: RegExp;
  isRequired?: boolean;
}

export type { InputTextItem };
