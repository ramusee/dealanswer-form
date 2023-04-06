import { createSelector } from '@reduxjs/toolkit';
import { selectRoot } from '../rootSelector';

const selectSpvState = createSelector(selectRoot, state => state.spv);
export const selectSpvWelcomeBlock = createSelector(selectSpvState, state => state.welcomeBlock);
// mySpvDetails
export const selectMySpvDetailsTabOne = createSelector(selectSpvState, state => state.mySpvDetails.tabOne);
export const selectMySpvDetailsTabTwo = createSelector(selectSpvState, state => state.mySpvDetails.tabTwo);
export const selectMySpvDetailsCurrentTab = createSelector(selectSpvState, state => state.mySpvDetails.currentTab);

//investmentTerms
export const selectInvestTermsCurrentTab = createSelector(selectSpvState, state => state.investmentTerms.currentTab);
export const selectInvestmentTermsTabOne = createSelector(selectSpvState, state => state.investmentTerms.tabOne);
export const selectInvestmentTermsTabTwo = createSelector(selectSpvState, state => state.investmentTerms.tabTwo);
export const selectInvestmentTermsTabThree = createSelector(selectSpvState, state => state.investmentTerms.tabThree);
