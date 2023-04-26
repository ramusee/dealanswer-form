import { InputRadioItem } from '../ui/radioInputGroup';
import { InputTextItem } from '../ui/inputTextGroup';

type ValueOf<T> = T[keyof T];

interface FieldsetValue {
  title: string;
  subTitle?: string;
  radioList?: InputRadioItem[];
  checkboxList?: string[];
  subscribeItemList?: string[];
  inputTextList?: InputTextItem[];
  select?: {
    placeholder: string;
  };
  inputText?: {
    value: string;
    placeholder: string;
  };
  inputFile?: {
    title: string;
    value: string;
    description?: string;
  };
  members?: string[] | null;
}

export type { FieldsetValue, ValueOf };
