import { createAction } from '@reduxjs/toolkit/src';
import { IMySPVDetailsTabTwo } from '../../../types/projects/spv/mySpvDetails';

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
const setMinimumCommitmentTextValue = createAction<string>('set minimum commitment text value');
const setMySpvDetailCurrentLocalTab = createAction<number>('set my spv details current local tab');
// mySpvDetailsTabTwo
const setMySpvDetailsTabTwo = createAction<IMySPVDetailsTabTwo>('set my spv details tab two');

export {
  setIsFirstTimeSpv,
  setPreviousSpvName,
  setIsChangeSpvInvestmentStructure,
  setIsChangeSpvInvestmentTerms,
  setChangeMemberRoleInformation,
  setSpvName,
  setTargetInvestAmount,
  setMinimumCommitment,
  setMySpvDetailCurrentLocalTab,
  setMinimumCommitmentTextValue,
  setMySpvDetailsTabTwo,
};
