import { FieldsetValue } from '../../../types/projects/projects';

type ValueOf<T> = T[keyof T];

const FieldsetIndividualMemberName = {
  passport: 'passport',
  memberInfo: 'memberInfo',
} as const;
type FieldsetIndividualMemberName = ValueOf<typeof FieldsetIndividualMemberName>;

const individualMemberForm: Record<FieldsetIndividualMemberName, FieldsetValue> = {
  [FieldsetIndividualMemberName.passport]: {
    title: 'Passport',
    inputFile: {
      value: 'passportFile',
      title: 'Upload Passport',
      description: 'Acceptable file extensions: .pdf, .jpg, .jpeg, .png',
    },
    inputText: {
      value: 'citizenship',
      placeholder: 'Citizenship',
    },
  },

  [FieldsetIndividualMemberName.memberInfo]: {
    title: 'Enter full first and last name as evidenced by a government-issued, unexpired document ',
    inputTextList: [
      { value: 'fullLegalName', placeholder: 'Full Legal Name' },
      { value: 'carriedPercent', placeholder: '% in the SPV' },
      { value: 'lineOne', placeholder: 'Line 1' },
      { value: 'lineTwo', placeholder: 'Line 2 (optional)', isRequired: false },
      { value: 'city', placeholder: 'City' },
      { value: 'state', placeholder: 'State/Province/Region' },
      { value: 'postalCode', placeholder: 'Zip/Postal Code' },
      { value: 'country', placeholder: 'Country' },
      { value: 'phoneNumber', placeholder: 'Phone Number (optional)', isRequired: false },
      { value: 'email', placeholder: 'Email (optional)', isRequired: false },
      { value: 'passportNumber', placeholder: 'Passport Number' },
      { value: 'birthDate', placeholder: 'Date of Birth' },
    ],
  },
};

const legalEntityMemberForm: Record<string, FieldsetValue> = {
  passportFile: {
    title: 'Passport File',
    inputFile: {
      value: 'passportFile',
      title: 'Upload Passport',
      description: 'Acceptable file extensions: .pdf, .jpg, .jpeg, .png',
    },
  },
  memberInfo: {
    title: 'Enter full legal name as evidenced by a government-issued incorporation document',
    inputTextList: [
      { value: 'fullLegalName', placeholder: 'Full Legal Name' },
      { value: 'stateIncorporation', placeholder: 'State/country of incorporation' },
    ],
  },
  mailingAddress: {
    title: 'Enter Mailing Address',
    inputTextList: [
      { value: 'lineOne', placeholder: 'Line 1' },
      { value: 'lineTwo', placeholder: 'Line 2 (optional)', isRequired: false },
      { value: 'city', placeholder: 'City' },
      { value: 'stateMailing', placeholder: 'State/Province/Region' },
      { value: 'postalCode', placeholder: 'Zip/Postal Code' },
      { value: 'country', placeholder: 'Country' },
      { value: 'signatoryName', placeholder: 'Name of the Signatory' },
      { value: 'signatoryTitle', placeholder: 'Title of the Signatory' },
      { value: 'signatoryEmail', placeholder: 'Email of the Signatory' },
      { value: 'carriedPercent', placeholder: '% in the SPV' },
    ],
  },
};

export { individualMemberForm, legalEntityMemberForm };
