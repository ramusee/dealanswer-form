import { createSelector } from '@reduxjs/toolkit';
import { selectRoot } from '../rootSelector';

const selectSpvState = createSelector(selectRoot, state => state.spv);
export const selectSpvWelcomeBlock = createSelector(selectSpvState, state => state.welcomeBlock);
export const selectMySpvDetailsTabOne = createSelector(selectSpvState, state => state.mySpvDetails.tabOne);
export const selectMySpvDetailsTabTwo = createSelector(selectSpvState, state => state.mySpvDetails.tabTwo);
