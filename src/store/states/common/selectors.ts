import { createSelector } from '@reduxjs/toolkit';
import { selectRoot } from '../rootSelector';

const selectCommonState = createSelector(selectRoot, state => state.common);

export const selectIsOpenSidebar = createSelector(
  selectCommonState,
  state => state.isOpenSideBar,
);
