import { createSelector } from '@reduxjs/toolkit';
import { selectRoot } from '../rootSelector';

const selectSpvState = createSelector(selectRoot, state => state.spv);
export const selectSpvWelcomeBlock = createSelector(selectSpvState, state => state.welcomeBlock);
export const selectSpvMyDetailsTabOne = createSelector(selectSpvState, state => state.mySpvDetails.tabOne);
export const selectSpvMyDetailsTabTwo = createSelector(selectSpvState, state => state.mySpvDetails.tabTwo);

export const selectIsFirstTimeSpv = createSelector(selectSpvWelcomeBlock, state => state.isFirstTimeSpv);
export const selectPreviousSpvName = createSelector(selectSpvWelcomeBlock, state => state.previousSpvName);
export const selectIsChangeSpvInvestStr = createSelector(
  selectSpvWelcomeBlock,
  state => state.isChangeSpvInvestmentStructure,
);
export const selectIsChangeSpvInvestTerms = createSelector(
  selectSpvWelcomeBlock,
  state => state.isChangeSpvInvestmentTerms,
);

export const selectChangeMemberRoleInformation = createSelector(
  selectSpvWelcomeBlock,
  state => state.changeMemberRoleInformation,
);
