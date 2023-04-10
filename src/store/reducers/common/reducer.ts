import { createReducer } from '@reduxjs/toolkit/src';
import { changeSidebarStatus, nextProgressStep, previousProgressStep, setProgressStep } from './actions';

interface CommonState {
  currentProgressStep: number;
  isOpenSideBar: boolean;
}

const initialCommonState: CommonState = {
  currentProgressStep: 0,
  isOpenSideBar: false,
};

export const common = createReducer(initialCommonState, {
  [changeSidebarStatus.type]: state => {
    state.isOpenSideBar = !state.isOpenSideBar;
  },
  [nextProgressStep.type]: state => {
    state.currentProgressStep = state.currentProgressStep + 1;
  },
  [previousProgressStep.type]: state => {
    state.currentProgressStep = state.currentProgressStep - 1;
  },
  [setProgressStep.type]: (state, action) => {
    state.currentProgressStep = action.payload;
  },
});
