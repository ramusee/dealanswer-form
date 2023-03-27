import { createReducer } from '@reduxjs/toolkit/src';
import { changeSidebarStatus } from './actions';

interface CommonState {
  isOpenSideBar: boolean;
}

const initialCommonState: CommonState = {
  isOpenSideBar: false,
};

export const common = createReducer(initialCommonState, {
  [changeSidebarStatus.type]: state => {
    state.isOpenSideBar = !state.isOpenSideBar;
  },
});
