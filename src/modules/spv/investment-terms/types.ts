interface InvestmentTermsProps {
  nextTabHandler: () => void;
  previousTabHandler?: () => void;
}

interface InvestmentTermsTabProps {
  nextTabHandler?: () => void;
  previousTabHandler?: () => void;
  changeCurrentLocalTab: (step: number) => void;
}

export type { InvestmentTermsProps, InvestmentTermsTabProps };
