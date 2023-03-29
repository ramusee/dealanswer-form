import { InputRadioItem } from '../ui/radioInputGroup';

type ValueOf<T> = T[keyof T];

export const SpvMemberRole = {
  spvInitialMember: "SPV's Initial Member(s)",
  spvManager: "SPV's Manager",
  spvSpecialMember: "SPV's Special Member",
} as const;
type SpvMemberRole = ValueOf<typeof SpvMemberRole>;

interface SpvWelcomeFieldsetValue {
  title: string;
  radioList?: InputRadioItem[];
  checkboxList?: string[];
  inputPlaceholder?: string;
}

interface ISpvWelcomeBlock {
  isFirstTimeSpv: string;
  previousSpvName: string;
  isChangeSpvInvestmentStructure: string;
  isChangeSpvInvestmentTerms: string;
  changeMemberRoleInformation: string[] | null;
}

export type { ISpvWelcomeBlock, SpvWelcomeFieldsetValue };
