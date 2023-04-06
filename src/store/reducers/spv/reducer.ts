import { createReducer } from '@reduxjs/toolkit/src';
import { ISpvWelcomeBlock } from '../../../types/projects/spv/welcomeBlock';
import { IMySpvDetails } from '../../../types/projects/spv/mySpvDetails';
import {
  setChangeMemberRoleInformation,
  setInvestmentTermsCurrentTab,
  setInvestmentTermsTabOne,
  setInvestmentTermsTabThree,
  setInvestmentTermsTabTwo,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setMySpvDetailCurrentTab,
  setMySpvDetailsTabOne,
  setMySpvDetailsTabTwo,
  setPreviousSpvName,
} from './actions';
import { IInvestmentTerms } from '../../../types/projects/spv/InvestmentTerms';

interface SpvState {
  welcomeBlock: ISpvWelcomeBlock;
  mySpvDetails: IMySpvDetails;
  investmentTerms: IInvestmentTerms;
}

const initialCommonState: SpvState = {
  welcomeBlock: {
    isFirstTimeSpv: '',
    previousSpvName: '',
    isChangeSpvInvestmentStructure: '',
    isChangeSpvInvestmentTerms: '',
    changeMemberRoleInformation: null,
  },
  mySpvDetails: {
    currentTab: 1,
    tabOne: {
      spvName: '',
      targetInvestmentAmount: '',
      minimumCommitment: {
        radioValue: '',
        contentTextValue: '',
      },
    },
    tabTwo: {
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
    },
  },
  investmentTerms: {
    currentTab: 1,
    tabOne: {
      carriedInterestFor: null,
      carriedInterest: {
        radioValue: '',
        contentTextValue: '',
      },
      preferredReturn: {
        radioValue: '',
        contentTextValue: '',
      },
    },
    tabTwo: {
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
    },
    tabThree: {
      isUsdcFromInvestors: {
        radioValue: '',
      },
      isMultiAssetSpv: {
        radioValue: '',
      },
      portfolioInformation: {
        fullLegalName: '',
        state: '',
        briefDescription: '',
      },
      isDistributePortfolio: {
        radioValue: '',
      },
    },
  },
  // investmentStructure: {},
  // addOns: {},
  // orderSummary: {},
};

export const spv = createReducer(initialCommonState, {
  // welcomeBlock
  [setMySpvDetailCurrentTab.type]: (state, action) => {
    state.mySpvDetails.currentTab = action.payload;
  },
  [setIsFirstTimeSpv.type]: (state, action) => {
    state.welcomeBlock.isFirstTimeSpv = action.payload;
    state.welcomeBlock.previousSpvName = '';
  },
  [setPreviousSpvName.type]: (state, action) => {
    state.welcomeBlock.previousSpvName = action.payload;
  },
  [setIsChangeSpvInvestmentStructure.type]: (state, action) => {
    state.welcomeBlock.isChangeSpvInvestmentStructure = action.payload;
    state.welcomeBlock.changeMemberRoleInformation = null;
  },
  [setIsChangeSpvInvestmentTerms.type]: (state, action) => {
    state.welcomeBlock.isChangeSpvInvestmentTerms = action.payload;
  },
  [setChangeMemberRoleInformation.type]: (state, action) => {
    state.welcomeBlock.changeMemberRoleInformation = action.payload;
  },
  // mySpvDetails
  [setMySpvDetailsTabOne.type]: (state, action) => {
    state.mySpvDetails.tabOne = action.payload;
  },
  [setMySpvDetailsTabTwo.type]: (state, action) => {
    state.mySpvDetails.tabTwo = action.payload;
  },
  //  investment terms
  [setInvestmentTermsCurrentTab.type]: (state, action) => {
    state.investmentTerms.currentTab = action.payload;
  },
  [setInvestmentTermsTabOne.type]: (state, action) => {
    state.investmentTerms.tabOne = action.payload;
  },
  [setInvestmentTermsTabTwo.type]: (state, action) => {
    state.investmentTerms.tabTwo = action.payload;
  },
  [setInvestmentTermsTabThree.type]: (state, action) => {
    state.investmentTerms.tabThree = action.payload;
  },
});
