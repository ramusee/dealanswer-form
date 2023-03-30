import { InputRadioContent } from '../../../types/ui/radioInputGroup';
import { SpvMemberRole } from '../../../types/projects/spv/welcomeBlock';
import { FieldsetValue } from '../../../types/projects/projects';

type ValueOf<T> = T[keyof T];

const RadioValue = {
  No: 'No',
  Yes: 'Yes',
} as const;
type RadioValue = ValueOf<typeof RadioValue>;

const FieldsetWelcomeBlockName = {
  isFirstTimeSpv: 'isFirstTimeSpv',
  isChangeSpvInvestmentStructure: 'isChangeSpvInvestmentStructure',
  isChangeSpvInvestmentTerms: 'isChangeSpvInvestmentTerms',
  changeMemberRoleInformation: 'changeMemberRoleInformation',
} as const;
type FieldsetName = ValueOf<typeof FieldsetWelcomeBlockName>;

const spvWelcomeFieldset: Record<FieldsetName, FieldsetValue> = {
  [FieldsetWelcomeBlockName.isFirstTimeSpv]: {
    title: 'Is it your first time forming an SPV with Deal Answer?',
    radioList: [
      { value: RadioValue.Yes, content: InputRadioContent.Default },
      { value: RadioValue.No, content: InputRadioContent.Default },
    ],
    inputText: {
      value: 'previousSpvName',
      placeholder: 'What is the name of your previous SPV?',
    },
  },
  [FieldsetWelcomeBlockName.isChangeSpvInvestmentStructure]: {
    title: 'Do you want to change your SPV Investment Structure?',
    radioList: [
      { value: RadioValue.Yes, content: InputRadioContent.Default },
      { value: RadioValue.No, content: InputRadioContent.Default },
    ],
  },
  [FieldsetWelcomeBlockName.isChangeSpvInvestmentTerms]: {
    title: 'Do you want to change your SPV Investment Terms?',
    radioList: [
      { value: RadioValue.Yes, content: InputRadioContent.Default },
      { value: RadioValue.No, content: InputRadioContent.Default },
    ],
  },
  [FieldsetWelcomeBlockName.changeMemberRoleInformation]: {
    title: 'Do you want to change or amend information about:',
    checkboxList: Object.values(SpvMemberRole),
  },
};

export { spvWelcomeFieldset, FieldsetWelcomeBlockName, RadioValue };
