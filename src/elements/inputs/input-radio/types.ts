import { ChangeEvent } from 'react';

interface InputRadioProps {
  text: string;
  name: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type { InputRadioProps };
