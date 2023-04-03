import { IRadioValueText } from '../../../ui/inputs/input-radio/types';

type ValueOf<T> = T[keyof T];

const SpvMemberRole = {
  spvInitialMember: "SPV's Initial Member(s)",
  spvManager: "SPV's Manager",
  spvSpecialMember: "SPV's Special Member",
} as const;
type SpvMemberRole = ValueOf<typeof SpvMemberRole>;

interface ISpvWelcomeBlock {
  isFirstTimeSpv: string;
  previousSpvName: string;
  isChangeSpvInvestmentStructure: string;
  isChangeSpvInvestmentTerms: string;
  changeMemberRoleInformation: string[] | null;
}

interface ISpvWelcomeBlockForm {
  isFirstTimeSpv: IRadioValueText;
  previousSpvName: string;
  isChangeSpvInvestmentStructure: IRadioValueText;
  isChangeSpvInvestmentTerms: IRadioValueText;
  changeMemberRoleInformation: string[] | null;
}

export { SpvMemberRole };
export type { ISpvWelcomeBlock, ISpvWelcomeBlockForm };
