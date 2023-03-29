import { createReducer } from '@reduxjs/toolkit/src';
import { ISpvWelcomeBlock } from '../../../types/spv/welcomeBlock';
import { MySpvDetails } from '../../../types/spv/mySpvDetails';
import {
  setChangeMemberRoleInformation,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setIsFirstTimeSpv,
  setPreviousSpvName,
} from './actions';

interface SpvState {
  welcomeBlock: ISpvWelcomeBlock;
  mySpvDetails: MySpvDetails;
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
    spvName: '',
    minimumCommitment: null,
    targetInvestmentAmount: null,
    initialClosingDate: null,
    finalClosingDate: '',
    termSpv: '',
    spvExtension: '',
  },
  // investmentTerms: {},
  // investmentStructure: {},
  // addOns: {},
  // orderSummary: {},
};

export const spv = createReducer(initialCommonState, {
  [setIsFirstTimeSpv.type]: (state, action) => {
    state.welcomeBlock.isFirstTimeSpv = action.payload;
  },
  [setPreviousSpvName.type]: (state, action) => {
    state.welcomeBlock.previousSpvName = action.payload;
  },
  [setIsChangeSpvInvestmentStructure.type]: (state, action) => {
    state.welcomeBlock.isChangeSpvInvestmentStructure = action.payload;
  },
  [setIsChangeSpvInvestmentTerms.type]: (state, action) => {
    state.welcomeBlock.isChangeSpvInvestmentTerms = action.payload;
  },
  [setChangeMemberRoleInformation.type]: (state, action) => {
    state.welcomeBlock.changeMemberRoleInformation = action.payload;
  },
});
