import { InputRadioItem } from '../ui/radioInputGroup';

interface FieldsetValue {
  title: string;
  subTitle?: string;
  radioList?: InputRadioItem[];
  checkboxList?: string[];
  inputText?: {
    value: string;
    placeholder: string;
  };
}

export type { FieldsetValue };
