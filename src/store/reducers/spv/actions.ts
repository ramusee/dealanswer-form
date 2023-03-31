import { createAction } from '@reduxjs/toolkit/src';

// welcomeBlock
const setIsFirstTimeSpv = createAction<string>('set is first time spv');
const setPreviousSpvName = createAction<string>('set previous spv name');
const setIsChangeSpvInvestmentStructure = createAction<string>('set is change spv investment structure');
const setIsChangeSpvInvestmentTerms = createAction<string>('set is change spv investment terms');
const setChangeMemberRoleInformation = createAction<string[]>('set change member role information');

//mySpvDetailsTabOne
const setSpvName = createAction<string>('set spv name');
const setTargetInvestAmount = createAction<string>('set target invest amount');
const setMinimumCommitment = createAction<string>('set minimum commitment');

// mySpvDetailsTabTwo
const setInitialClosingDate = createAction<string | Date>('set initial closing date');
const setFinalClosingDate = createAction<string | Date>('set final closing');
const setTermSpv = createAction<string>('set term spv');
const setSpvExtension = createAction<string>('set spv extension');
const setInitialClosingDateTextValue = createAction<string>('set initial closing date text value');

export {
  setIsFirstTimeSpv,
  setPreviousSpvName,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setChangeMemberRoleInformation,
  setSpvName,
  setTargetInvestAmount,
  setMinimumCommitment,
  setInitialClosingDate,
  setFinalClosingDate,
  setTermSpv,
  setSpvExtension,
  setInitialClosingDateTextValue,
};
