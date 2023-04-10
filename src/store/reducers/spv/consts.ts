const welcomeBlockState = {
  isFirstTimeSpv: '',
  previousSpvName: '',
  isChangeSpvInvestmentStructure: '',
  isChangeSpvInvestmentTerms: '',
  changeMemberRoleInformation: null,
};

// mySpvDetails
const mySpvDetailsTabOneState = {
  spvName: '',
  targetInvestmentAmount: '',
  minimumCommitment: {
    radioValue: '',
    contentTextValue: '',
  },
};

const mySpvDetailsTabTwoState = {
  initialClosingDate: {
    radioValue: '',
    contentDateValue: null,
  },
  initialClosingDateTextValue: '',
  finalClosingDate: {
    radioValue: '',
    contentTextValue: '',
    contentDateValue: null,
  },
  termSpv: {
    radioValue: '',
    contentTextValue: '',
  },
  spvExtension: {
    radioValue: '',
    contentTextValue: '',
  },
};

const mySpvDetailsState = {
  currentTab: 1,
  tabOne: mySpvDetailsTabOneState,
  tabTwo: mySpvDetailsTabTwoState,
};

// investmentTerms

const investmentTermsTabOneState = {
  carriedInterestFor: null,
  carriedInterest: {
    radioValue: '',
    contentTextValue: '',
  },
  preferredReturn: {
    radioValue: '',
    contentTextValue: '',
  },
};

const investmentTermsTabTwoState = {
  managementFee: {
    radioValue: '',
    contentTextValue: '',
  },
  typeManagementFee: {
    radioValue: '',
  },
  subscriptionFee: {
    radioValue: '',
    contentTextValue: '',
  },
  isSubscriptionFeeCapital: {
    radioValue: '',
  },
};

const investmentTermsTabThreeState = {
  isUsdcFromInvestors: {
    radioValue: '',
  },
  isMultiAssetSpv: {
    radioValue: '',
  },
  isMultiAssetSpvTextValue: '',
  portfolioInformation: {
    fullLegalName: '',
    state: '',
    briefDescription: '',
  },
  isDistributePortfolio: {
    radioValue: '',
  },
};

const investmentTermsState = {
  currentTab: 1,
  tabOne: investmentTermsTabOneState,
  tabTwo: investmentTermsTabTwoState,
  tabThree: investmentTermsTabThreeState,
};

export { welcomeBlockState, mySpvDetailsState, investmentTermsState };
