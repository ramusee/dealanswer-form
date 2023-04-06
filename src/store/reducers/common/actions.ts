import { createAction } from '@reduxjs/toolkit/src';

export const changeSidebarStatus = createAction('change app-sidebar status');
export const nextProgressStep = createAction('next progress step');
export const previousProgressStep = createAction('previous progress step');
