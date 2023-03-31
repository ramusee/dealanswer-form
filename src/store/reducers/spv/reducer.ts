import { createReducer } from '@reduxjs/toolkit/src';
import { ISpvWelcomeBlock } from '../../../types/projects/spv/welcomeBlock';
import { IMySpvDetails } from '../../../types/projects/spv/mySpvDetails';
import {
  setChangeMemberRoleInformation,
  setFinalClosingDate,
  setInitialClosingDate,
  setInitialClosingDateTextValue,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setMinimumCommitment,
  setPreviousSpvName,
  setSpvExtension,
  setSpvName,
  setTargetInvestAmount,
  setTermSpv,
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
    tabOne: {
      spvName: '',
      targetInvestmentAmount: '',
      minimumCommitment: '',
    },
    tabTwo: {
      initialClosingDate: '',
      initialClosingDateTextValue: '',
      finalClosingDate: '',
      termSpv: '',
      spvExtension: '',
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
    state.mySpvDetails.tabOne.minimumCommitment = action.payload;
  },
  [setInitialClosingDate.type]: (state, action) => {
    state.mySpvDetails.tabTwo.initialClosingDate = action.payload;
  },
  [setFinalClosingDate.type]: (state, action) => {
    state.mySpvDetails.tabTwo.finalClosingDate = action.payload;
  },
  [setTermSpv.type]: (state, action) => {
    state.mySpvDetails.tabTwo.termSpv = action.payload;
  },
  [setSpvExtension.type]: (state, action) => {
    state.mySpvDetails.tabTwo.spvExtension = action.payload;
  },
  [setInitialClosingDateTextValue.type]: (state, action) => {
    state.mySpvDetails.tabTwo.initialClosingDateTextValue = action.payload;
  },
});
