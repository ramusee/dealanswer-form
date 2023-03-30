import { createAction } from '@reduxjs/toolkit/src';

export const changeSidebarStatus = createAction('change app-sidebar status');
export const setCurrentTab = createAction<number>('set current tab');
