import { InputRadioContent } from '../../../types/ui/radioInputGroup';

interface InputRadioProps {
  value: string;
  name: string;
  isDisabled?: boolean;
  content: InputRadioContent;
}

interface IRadioValueText {
  radioValue: string;
  contentTextValue: string;
}

interface IRadioValueWithDate {
  radioValue: string;
  contentTextValue: string;
  contentDateValue: Date | null;
}

export type { InputRadioProps, IRadioValueText, IRadioValueWithDate };
