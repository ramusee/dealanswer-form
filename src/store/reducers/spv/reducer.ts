import { createReducer } from '@reduxjs/toolkit/src';
import { ISpvWelcomeBlock } from '../../../types/projects/spv/welcomeBlock';
import { IMySpvDetails } from '../../../types/projects/spv/mySpvDetails';
import {
  setChangeMemberRoleInformation,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setMySpvDetailCurrentLocalTab,
  setMySpvDetailsTabOne,
  setMySpvDetailsTabTwo,
  setPreviousSpvName,
} from './actions';

interface SpvState {
  welcomeBlock: ISpvWelcomeBlock;
  mySpvDetails: IMySpvDetails;
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
    currentLocalTab: 1,
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
  // investmentTerms: {},
  // investmentStructure: {},
  // addOns: {},
  // orderSummary: {},
};

export const spv = createReducer(initialCommonState, {
  // welcomeBlock
  [setMySpvDetailCurrentLocalTab.type]: (state, action) => {
    state.mySpvDetails.currentLocalTab = action.payload;
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
});
