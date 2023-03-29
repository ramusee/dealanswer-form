import { createAction } from '@reduxjs/toolkit/src';

const setIsFirstTimeSpv = createAction<string>('set is first time spv');
const setPreviousSpvName = createAction<string>('set previous spv name');
const setIsChangeSpvInvestmentStructure = createAction<string>('set is change spv investment structure');
const setIsChangeSpvInvestmentTerms = createAction<string>('set is change spv investment terms');
const setChangeMemberRoleInformation = createAction<string[]>('set change member role information');

export {
  setIsFirstTimeSpv,
  setPreviousSpvName,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setChangeMemberRoleInformation,
};
