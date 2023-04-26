import { FieldsetValue, ValueOf } from '../../../types/projects/projects';

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

export { individualMemberForm };
