import { InputRadioItem } from '../ui/radioInputGroup';
import { InputTextItem } from '../ui/inputTextGroup';

interface FieldsetValue {
  title: string;
  subTitle?: string;
  radioList?: InputRadioItem[];
  checkboxList?: string[];
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

interface InitialMember {
  memberType: string;
}
interface IMemberIndividual {
  memberType: string;
  citizenship: string;
  fullLegalName: string;
  carriedInterest: string;
  lineOne: string;
  lineTwo: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
  passportNumber: string;
  birthDate: string;
}

interface IMemberLegalEntity {
  memberType: string;
  fullLegalName: string;
  stateIncorporation: string;
  lineOne: string;
  lineTwo: string;
  city: string;
  stateMailing: string;
  postalCode: string;
  country: string;
  signatoryName: string;
  signatoryTitle: string;
  signatoryEmail: string;
  carriedInterest: string;
}
export type { FieldsetValue, IMemberIndividual, IMemberLegalEntity };
