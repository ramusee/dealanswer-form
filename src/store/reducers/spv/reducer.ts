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
import { addOnsState, investmentTermsState, mySpvDetailsState, welcomeBlockState } from './consts';

import { IInvestmentTerms } from '../../../types/projects/spv/InvestmentTerms';
import { IMemberIndividual } from '../../../types/projects/projects';
import { IAddOns } from '../../../types/projects/spv/addOns';

interface SpvState {
  members: IMemberIndividual[] | null;
  welcomeBlock: ISpvWelcomeBlock;
  mySpvDetails: IMySpvDetails;
  investmentTerms: IInvestmentTerms;
  investmentStructure: {
    initialMembers: IMemberIndividual[] | null;
  };
  addOns: IAddOns;
}

const initialSpvState: SpvState = {
  members: null,
  welcomeBlock: welcomeBlockState,
  mySpvDetails: mySpvDetailsState,
  investmentTerms: investmentTermsState,
  investmentStructure: {
    initialMembers: null,
  },
  addOns: addOnsState,
  // orderSummary: {},
};

export const spv = createReducer(initialSpvState, {
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
  //  investment structure
});
