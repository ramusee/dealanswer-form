import { InputRadioContent } from '../../../types/ui/radioInputGroup';

interface InputRadioProps {
  value: string;
  name: string;
  isDisabled?: boolean;
  content: InputRadioContent;
}

interface IRadioValue {
  radioValue: string;
  contentTextValue: string;
  contentDateValue: Date | null;
}
type IRadioValueText = Pick<IRadioValue, 'radioValue' | 'contentTextValue'>;
type IRadioValueDate = Pick<IRadioValue, 'radioValue' | 'contentDateValue'>;

export type { InputRadioProps, IRadioValue, IRadioValueText, IRadioValueDate };
