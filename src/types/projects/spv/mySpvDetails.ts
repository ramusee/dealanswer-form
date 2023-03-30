interface IMySpvDetails {
  tabOne: IMySpvDetailsTabOne;
  tabTwo: IMySPVDetailsTabTwo;
}

interface IMySpvDetailsTabOne {
  spvName: string;
  targetInvestmentAmount: number | null;
  minimumCommitment: number | null;
}

interface IMySPVDetailsTabTwo {
  initialClosingDate: Date | number | null;
  finalClosingDate: Date | string;
  termSpv: string;
  spvExtension: string;
}

export type { IMySpvDetails, IMySpvDetailsTabOne, IMySPVDetailsTabTwo };
