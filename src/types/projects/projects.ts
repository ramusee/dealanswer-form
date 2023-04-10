import { InputRadioItem } from '../ui/radioInputGroup';
import { InputTextItem } from '../ui/inputTextGroup';

interface FieldsetValue {
  title: string;
  subTitle?: string;
  radioList?: InputRadioItem[];
  checkboxList?: string[];
  inputTextList?: InputTextItem[];
  inputText?: {
    value: string;
    placeholder: string;
  };
  inputFile?: {
    title: string;
    value: string;
  };
  members?: string[] | null;
}

export type { FieldsetValue };
