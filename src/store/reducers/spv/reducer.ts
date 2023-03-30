import { createReducer } from '@reduxjs/toolkit/src';
import { ISpvWelcomeBlock } from '../../../types/projects/spv/welcomeBlock';
import { IMySpvDetails } from '../../../types/projects/spv/mySpvDetails';
import {
  setChangeMemberRoleInformation,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setMySpvDetailsTabOneForm,
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
    tabOne: {
      spvName: '',
      targetInvestmentAmount: null,
      minimumCommitment: null,
    },
    tabTwo: {
      initialClosingDate: null,
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
  [setMySpvDetailsTabOneForm.type]: (state, action) => {
    state.mySpvDetails.tabOne = action.payload;
  },
});
