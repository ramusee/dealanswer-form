import { IRadioValueText, IRadioValueDefault } from '../../../ui/inputs/input-radio/types';

interface IInvestmentTerms {
  currentTab: number;
  tabOne: IInvestmentTermsTabOne;
  tabTwo: IInvestmentTermsTabTwo;
  tabThree: IInvestmentTermsTabThree;
}

interface IInvestmentTermsTabOne {
  carriedInterestFor: string[] | null;
  carriedInterest: IRadioValueText;
  preferredReturn: IRadioValueText;
}

interface IInvestmentTermsTabTwo {
  managementFee: IRadioValueText;
  typeManagementFee: IRadioValueDefault;
  subscriptionFee: IRadioValueText;
  isSubscriptionFeeCapital: IRadioValueDefault;
}

interface IInvestmentTermsTabThree {
  isUsdcFromInvestors: IRadioValueDefault;
  isMultiAssetSpv: IRadioValueDefault;
  isMultiAssetSpvTextValue: string;
  portfolioInformation: {
    fullLegalName: string;
    state: string;
    briefDescription: string;
  };
  isDistributePortfolio: IRadioValueDefault;
}
export type { IInvestmentTerms, IInvestmentTermsTabOne, IInvestmentTermsTabTwo, IInvestmentTermsTabThree };
