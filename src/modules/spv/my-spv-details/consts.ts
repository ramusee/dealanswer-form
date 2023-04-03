import { FieldsetValue } from '../../../types/projects/projects';
import { InputRadioContent } from '../../../types/ui/radioInputGroup';

type ValueOf<T> = T[keyof T];

const sectionTitle = {
  title: 'My SPV Details',
  subTitle: 'We will be asking you some general questions about your SPV.',
};

const FieldsetSpvDetailsName = {
  spvName: 'spvName',
  targetInvestmentAmount: 'targetInvestmentAmount',
  minimumCommitment: 'minimumCommitment',
  initialClosingDate: 'initialClosingDate',
  finalClosingDate: 'finalClosingDate',
  termSpv: 'termSpv',
  spvExtension: 'spvExtension',
} as const;
type FieldsetMySpvDetailsName = ValueOf<typeof FieldsetSpvDetailsName>;

const spvDetailsFieldset: Record<FieldsetMySpvDetailsName, FieldsetValue> = {
  [FieldsetSpvDetailsName.spvName]: {
    title: 'SPV Name',
    subTitle: 'Enter the desired name of your SPV with "LLC."',
    inputText: {
      value: FieldsetSpvDetailsName.spvName,
      placeholder: 'New Venture LLC',
    },
  },
  [FieldsetSpvDetailsName.targetInvestmentAmount]: {
    title: 'Target Investment Amount',
    subTitle: 'How much money do you plan to raise from investors?',
    inputText: {
      value: FieldsetSpvDetailsName.targetInvestmentAmount,
      placeholder: '1,000,000',
    },
  },
  [FieldsetSpvDetailsName.minimumCommitment]: {
    title: 'Minimum Commitment',
    subTitle: 'Is there a minimum investment requirement?',
    radioList: [
      { value: '10K', content: InputRadioContent.Default },
      { value: '100K', content: InputRadioContent.Default },
      { value: '1M', content: InputRadioContent.Default },
      { value: 'None', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
    ],
  },
  [FieldsetSpvDetailsName.initialClosingDate]: {
    title: 'Initial Closing Date',
    subTitle: 'What would be the date on wich the SPV first accepts capital commitments from investors?',
    radioList: [
      { value: 'date', content: InputRadioContent.Calendar },
      { value: 'When the aggregate Commitments equal to or exceed', content: InputRadioContent.Default },
    ],
    inputText: { value: 'initialClosingDateTextValue', placeholder: '1,000,000' },
  },
  [FieldsetSpvDetailsName.finalClosingDate]: {
    title: 'Final Closing Date',
    subTitle:
      'What would be the last date for the SPV to accept capital commitments from investors after the Initial Closing Date?',
    radioList: [
      { value: 'date', content: InputRadioContent.Calendar },
      { value: '1 year', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
    ],
  },
  [FieldsetSpvDetailsName.termSpv]: {
    title: 'Term of SPV',
    subTitle: 'Indicate the deadline for the SPV to fully liquidate the investment and distribute the capital gain.',
    radioList: [
      { value: '3 years', content: InputRadioContent.Default },
      { value: '5 years', content: InputRadioContent.Default },
      { value: '10 years', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
    ],
  },
  [FieldsetSpvDetailsName.spvExtension]: {
    title: 'SPV Extension',
    subTitle: 'For how long can the term of the SPV be extended?',
    radioList: [
      { value: 'One-year', content: InputRadioContent.Default },
      { value: 'Two one-year', content: InputRadioContent.Default },
      { value: 'Other', content: InputRadioContent.InputText },
    ],
  },
};

export { FieldsetSpvDetailsName, spvDetailsFieldset, sectionTitle };
