import { createReducer } from '@reduxjs/toolkit/src';
import { setCurrentTab, changeSidebarStatus } from './actions';

interface CommonState {
  currentTab: number;
  isOpenSideBar: boolean;
}

const initialCommonState: CommonState = {
  currentTab: 0,
  isOpenSideBar: false,
};

export const common = createReducer(initialCommonState, {
  [changeSidebarStatus.type]: state => {
    state.isOpenSideBar = !state.isOpenSideBar;
  },
  [setCurrentTab.type]: (state, action) => {
    state.currentTab = action.payload;
  },
});
