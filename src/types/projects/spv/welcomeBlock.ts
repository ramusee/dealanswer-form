import { IRadioValueText } from '../../../ui/inputs/input-radio/types';

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

export type { ISpvWelcomeBlock, ISpvWelcomeBlockForm };
