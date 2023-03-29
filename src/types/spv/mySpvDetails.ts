interface MySpvDetails {
  spvName: string;
  targetInvestmentAmount: number | null;
  minimumCommitment: number | null;
  initialClosingDate: Date | number | null;
  finalClosingDate: Date | string;
  termSpv: string;
  spvExtension: string;
}

export type { MySpvDetails };
