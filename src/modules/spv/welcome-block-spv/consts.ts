import { InputRadioContent } from '../../../types/ui/radioInputGroup';
import { FieldsetValue, ValueOf } from '../../../types/projects/projects';

const DualRadioValue = {
  No: 'No',
  Yes: 'Yes',
} as const;
type DualRadioValue = ValueOf<typeof DualRadioValue>;

const spvMemberRole = {
  spvInitialMember: "SPV's Initial Member(s)",
  spvManager: "SPV's Manager",
  spvSpecialMember: "SPV's Special Member",
};

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
      {
        value: DualRadioValue.Yes,
        content: InputRadioContent.Default,
      },
      {
        value: DualRadioValue.No,
        content: InputRadioContent.Default,
      },
    ],

    inputText: {
      value: 'previousSpvName',
      placeholder: 'What is the name of your previous SPV?',
    },
  },
  [FieldsetWelcomeBlockName.isChangeSpvInvestmentStructure]: {
    title: 'Do you want to change your SPV Investment Structure?',
    radioList: [
      {
        value: DualRadioValue.Yes,
        content: InputRadioContent.Default,
      },
      {
        value: DualRadioValue.No,
        content: InputRadioContent.Default,
      },
    ],
  },
  [FieldsetWelcomeBlockName.isChangeSpvInvestmentTerms]: {
    title: 'Do you want to change your SPV Investment Terms?',
    radioList: [
      {
        value: DualRadioValue.Yes,
        content: InputRadioContent.Default,
      },
      {
        value: DualRadioValue.No,
        content: InputRadioContent.Default,
      },
    ],
  },
  [FieldsetWelcomeBlockName.changeMemberRoleInformation]: {
    title: 'Do you want to change or amend information about:',
    checkboxList: Object.values(spvMemberRole),
  },
};

export { spvWelcomeFieldset, FieldsetWelcomeBlockName, DualRadioValue };
