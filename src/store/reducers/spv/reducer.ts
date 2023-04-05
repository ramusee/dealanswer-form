import { createReducer } from '@reduxjs/toolkit/src';
import { ISpvWelcomeBlock } from '../../../types/projects/spv/welcomeBlock';
import { IMySpvDetails } from '../../../types/projects/spv/mySpvDetails';
import {
  setChangeMemberRoleInformation,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setMinimumCommitment,
  setMinimumCommitmentTextValue,
  setMySpvDetailCurrentLocalTab,
  setMySpvDetailsTabTwo,
  setPreviousSpvName,
  setSpvName,
  setTargetInvestAmount,
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
        contentTextValue: '',
        contentDateValue: new Date().getTime(),
      },
      initialClosingDateTextValue: '',
      finalClosingDate: {
        radioValue: '',
        contentTextValue: '',
        contentDateValue: new Date().getTime(),
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
  [setSpvName.type]: (state, action) => {
    state.mySpvDetails.tabOne.spvName = action.payload;
  },
  [setTargetInvestAmount.type]: (state, action) => {
    state.mySpvDetails.tabOne.targetInvestmentAmount = action.payload;
  },
  [setMinimumCommitment.type]: (state, action) => {
    state.mySpvDetails.tabOne.minimumCommitment.radioValue = action.payload;
    state.mySpvDetails.tabOne.minimumCommitment.contentTextValue = '';
  },
  [setMinimumCommitmentTextValue.type]: (state, action) => {
    state.mySpvDetails.tabOne.minimumCommitment.contentTextValue = action.payload;
  },
  [setMySpvDetailCurrentLocalTab.type]: (state, action) => {
    state.mySpvDetails.currentLocalTab = action.payload;
  },
  [setMySpvDetailsTabTwo.type]: (state, action) => {
    state.mySpvDetails.tabTwo = action.payload;
  },
});
