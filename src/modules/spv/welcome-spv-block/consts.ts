import { InputRadioContent } from '../../../types/ui/radioInputGroup';
import { SpvMemberRole, SpvWelcomeFieldsetValue } from '../../../types/spv/welcomeBlock';

type ValueOf<T> = T[keyof T];

const FieldsetName = {
  isFirstTimeSpv: 'isFirstTimeSpv',
  isChangeSpvInvestmentStructure: 'isChangeSpvInvestmentStructure',
  isChangeSpvInvestmentTerms: 'isChangeSpvInvestmentTerms',
  changeMemberRoleInformation: 'changeMemberRoleInformation',
} as const;
type FieldsetName = ValueOf<typeof FieldsetName>;

const spvWelcomeFieldset: Record<FieldsetName, SpvWelcomeFieldsetValue> = {
  [FieldsetName.isFirstTimeSpv]: {
    title: 'Is it your first time forming an SPV with Deal Answer?',
    radioList: [
      { value: 'Yes', content: InputRadioContent.Default },
      { value: 'No', content: InputRadioContent.Default },
    ],
    inputPlaceholder: 'What is the name of your previous SPV?',
  },
  [FieldsetName.isChangeSpvInvestmentStructure]: {
    title: 'Do you want to change your SPV Investment Structure?',
    radioList: [
      { value: 'Yes', content: InputRadioContent.Default },
      { value: 'No', content: InputRadioContent.Default },
    ],
  },
  [FieldsetName.isChangeSpvInvestmentTerms]: {
    title: 'Do you want to change your SPV Investment Terms?',
    radioList: [
      { value: 'Yes', content: InputRadioContent.Default },
      { value: 'No', content: InputRadioContent.Default },
    ],
  },
  [FieldsetName.changeMemberRoleInformation]: {
    title: 'Do you want to change or amend information about:',
    checkboxList: Object.values(SpvMemberRole),
  },
};

export { spvWelcomeFieldset, FieldsetName };
