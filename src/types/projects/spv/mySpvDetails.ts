interface IMySpvDetails {
  tabOne: IMySpvDetailsTabOne;
  tabTwo: IMySPVDetailsTabTwo;
}

interface IMySpvDetailsTabOne {
  spvName: string;
  targetInvestmentAmount: string;
  minimumCommitment: string;
}

interface IMySPVDetailsTabTwo {
  initialClosingDate: Date | string;
  initialClosingDateTextValue: string;
  finalClosingDate: Date | string;
  termSpv: string;
  spvExtension: string;
}

export type { IMySpvDetails, IMySpvDetailsTabOne, IMySPVDetailsTabTwo };
