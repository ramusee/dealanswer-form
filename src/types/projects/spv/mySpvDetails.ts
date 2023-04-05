import { IRadioValue, IRadioValueText, IRadioValueDate } from '../../../ui/inputs/input-radio/types';

interface IMySpvDetails {
  currentLocalTab: number;
  tabOne: IMySpvDetailsTabOne;
  tabTwo: IMySPVDetailsTabTwo;
}

interface IMySpvDetailsTabOne {
  spvName: string;
  targetInvestmentAmount: string;
  minimumCommitment: IRadioValueText;
}

interface IMySPVDetailsTabTwo {
  initialClosingDate: IRadioValueDate;
  initialClosingDateTextValue: string;
  finalClosingDate: IRadioValue;
  termSpv: IRadioValueText;
  spvExtension: IRadioValueText;
}

export type { IMySpvDetails, IMySpvDetailsTabOne, IMySPVDetailsTabTwo };
