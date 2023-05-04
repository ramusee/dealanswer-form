import { FieldsetValue, ValueOf } from '../../../types/projects/projects';

const FieldsetLegalEntityMemberName = {
  memberInfo: 'memberInfo',
  mailingAddress: 'mailingAddress',
} as const;
type FieldsetLegalEntityMemberName = ValueOf<typeof FieldsetLegalEntityMemberName>;

const legalEntityMemberForm: Record<FieldsetLegalEntityMemberName, FieldsetValue> = {
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
    inputFile: {
      title: 'Upload Incorporation Documents',
      value: 'incorporationDocsFiles',
    },
  },
};

export { legalEntityMemberForm };
